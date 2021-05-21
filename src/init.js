import set from './init/set';
import scale from './init/scale';
import legend from './init/legend';
import initPlot from './init/plot';
import updateTimepoint from './layout/controls/player/updateTimepoint';

export default function init() {
    this.set = set.call(this);
    this.scale = scale.call(this);
    this.legend = legend.call(this);

    this.plots = this.settings.stratum_var
        ? d3
              .groups(this.data.mutated, (d) => d.stratum)
              .map(([stratum, data], i) => initPlot.call(this, data, stratum, i))
        : [initPlot.call(this)];

    runAnimation.call(this);
    this.break = true;

    this.delayTimeout = d3.timeout(() => {
        runAnimation.call(this);

        if (this.settings.play === false) this.break = true;
    }, this.settings.delay);
}

export async function runAnimation() {
    for (const timepoint of this.data.timepoints
        .filter((d) => d[0] >= this.settings.timepoint && d[0] <= this.settings.timepointMax)) {
        // Break loop.
        if (this.break) {
            this.plots.forEach((plot) => {
                plot.layout.svg.interrupt();
            });
            delete this.break;
            break;
        }

        // Update timepoint settings, data, and UI components.
        updateTimepoint.call(this, timepoint[0]);

        // Re-calculate x-domain.
        const allStates = this.data.interpolated.flatMap((d) => d[`states${this.settings.view}`]);
        //const x1 = this.settings.view === 'OverallSurvival'
        //    ? Math.max(
        //        d3.min(allStates, (d) => d.start_timepoint),
        //        this.settings.timepointMin
        //    ) : d3.min(allStates, (d) => d.start_timepoint);
        const x1 = d3.min(allStates, (d) => d.start_timepoint);
        const x2 = Math.min(
            d3.max(allStates, (d) => d.start_timepoint + d.duration),
            this.settings.timepointMax
        );
        this.xDomain = [x1, x2];

        // Transition plots to next timepoint.
        const transitions = this.plots.map((plot) => {
            plot.data.timepoint = plot.data.timepoints.find(
                ([timepoint, data]) => timepoint === this.settings.timepoint
            );
            return transitionAnimation.call(this, plot);
        });

        this.transition = transitions;

        // Await end of all transitions.
        await Promise.allSettled(transitions.map((transition) => transition.end()));
    }
}

export function transitionAnimation(plot) {
    const transition = plot.layout.svg
        .transition()
        .duration(this.settings.duration)
        .ease(d3.easeLinear);

    // Update the x-domain.
    plot.scale.x.domain(this.xDomain);

    // Update the plot components.
    plot.update.groups(plot.data.timepoint, transition);
    plot.update.bars(plot.data.timepoint, transition);
    plot.update.axis(plot.data.timepoint, transition);
    if (this.settings.displayIds) plot.update.labels(plot.data.timepoint, transition);

    return transition;
}
