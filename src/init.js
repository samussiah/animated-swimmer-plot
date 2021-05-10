import set from './init/set';
import scale from './init/scale';
import legend from './init/legend';
import groups from './init/groups';
import bars from './init/bars';
import axis from './init/axis';
import labels from './init/labels';
import ticker from './init/ticker';
import updateTimepoint from './layout/controls/player/updateTimepoint';

export function transitionAnimation(timepoint) {
    const transition = this.layout.svg
        .transition()
        .duration(this.settings.duration)
        .ease(d3.easeLinear);

    // Update the x-domain.
    const allStates = this.data.interpolated.flatMap((d) => d[`states${this.settings.view}`]);
    const x1 = d3.min(allStates, (d) => d.start_timepoint);
    const x2 = d3.max(allStates, (d) => d.start_timepoint + d.duration);
    this.scale.x.domain([x1, x2]);

    this.update.groups(timepoint, transition);
    this.update.bars(timepoint, transition);
    this.update.axis(timepoint, transition);
    if (this.settings.displayIds) this.update.labels(timepoint, transition);
    this.update.ticker(timepoint, transition);

    return transition;
}

export async function runAnimation() {
    for (const timepoint of this.data.timepoints.filter((d) => d[0] >= this.settings.timepoint)) {
        updateTimepoint.call(this, timepoint[0]);

        // Break loop.
        if (this.break) {
            this.layout.svg.interrupt();
            this.layout.ticker.text(`Day ${this.settings.timepoint}`);
            delete this.break;
            break;
        }

        this.active = true;

        const transition = transitionAnimation.call(this, timepoint);
        this.transition = transition;

        await transition.end();
    }
}

export default function init() {
    this.set = set.call(this);
    this.scale = scale.call(this);
    this.legend = legend.call(this);
    this.layout.n
        .attr(
            'transform',
            (d) => `translate(${this.settings.margin.left},${this.settings.margin.top / 2})`
        )
        .append('text')
        .attr('text-anchor', 'end')
        .attr('alignment-baseline', 'middle')
        .attr('x', -10)
        .attr('y', 10)
        .text(`n=${this.set.id.size}`);

    this.update = {
        groups: groups.call(this),
        bars: bars.call(this),
        axis: axis.call(this),
        labels: labels.call(this),
        ticker: ticker.call(this),
    };

    runAnimation.call(this);
}
