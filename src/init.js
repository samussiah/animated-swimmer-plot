import initPlot from './init/plot';
import stratify from './init/stratify';
import set from './init/set';
import scale from './init/scale';
import legend from './init/legend';
import ticker from './init/ticker';
import updateTimepoint from './layout/controls/player/updateTimepoint';

export default function init() {
    //stratify.call(this);
    this.set = set.call(this);
    this.scale = scale.call(this);
    this.legend = legend.call(this);
    this.plots = this.settings.stratum_var !== undefined
        ? d3.groups(this.data.mutated, d => d.stratum)
            .map(([stratum, mutated]) => {
                const interpolated = this.data.interpolated
                    .filter(d => d.stratum === stratum);
                const timepoints = this.data.timepoints
                    .map(([timepoint, data]) => {

                        // Define mutable rank given current view.
                        const stratumData = data
                            .filter(d => d.stratum === stratum)
                            .sort((a,b) => a[`rank${this.settings.view}`] - b[`rank${this.settings.view}`]);

                        stratumData
                            .forEach((d,i) => {
                                d[`rank${stratum}`] = i;
                            });


                        return [timepoint, stratumData];
                    });
                const data = {mutated, interpolated, timepoints};
                const plot = initPlot.call(this, data);
                plot.stratum = stratum;

                return plot;
            })
        : [{...initPlot.call(this, this.data), stratum: ''}];
    console.log(this.plots);

    runAnimation.call(this);
}

export async function runAnimation() {
    for (const timepoint of this.data.timepoints.filter((d) => d[0] >= this.settings.timepoint)) {
        updateTimepoint.call(this, timepoint[0]);

        // Break loop.
        if (this.break) {
            this.plot.layout.svg.interrupt();
            this.plot.layout.ticker.text(`Day ${this.settings.timepoint}`);
            delete this.break;
            break;
        }

        const allStates = this.data.interpolated.flatMap((d) => d[`states${this.settings.view}`]);
        const x1 = d3.min(allStates, (d) => d.start_timepoint);
        const x2 = d3.max(allStates, (d) => d.start_timepoint + d.duration);
        const xDomain = [x1, x2];

        const transitions = this.plots
            .map(plot => {
                plot.data.timepoint = plot.data.timepoints.find(([timepoint, data]) => timepoint === this.settings.timepoint);
                return transitionAnimation.call(this, plot, xDomain);
            });
        this.transition = transitions;

        await Promise.allSettled(transitions.map(transition => transition.end()));
    }
}

export function transitionAnimation(plot, xDomain) {
    const transition = plot.layout.svg
        .transition()
        .duration(this.settings.duration)
        .ease(d3.easeLinear);

    // Update the x-domain.
    plot.scale.x.domain(xDomain);

    // Update the plot components.
    plot.update.groups(plot.data.timepoint, transition);
    plot.update.bars(plot.data.timepoint, transition);
    plot.update.axis(plot.data.timepoint, transition);
    if (this.settings.displayIds) plot.update.labels(plot.data.timepoint, transition);
    plot.update.ticker(plot.data.timepoint, transition);

    return transition;
}
