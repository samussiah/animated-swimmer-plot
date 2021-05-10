// layout
import plotLayout from './plot/layout';

// set
import id from './set/id';

// scale
import x from './scale/x';
import y from './scale/y';

// update
import groups from './plot/groups';
import bars from './plot/bars';
import axis from './plot/axis';
import labels from './plot/labels';
import ticker from './ticker';

export default function plot(data) {
    const layout = plotLayout.call(this, this.layout.plots, this.settings.width);
    const set = {
        id: id.call(this, data.mutated),
    };
    const scale = {
        x: x.call(this, [this.settings.margin.left, this.settings.width - this.settings.margin.right]),
        y: y.call(this, set.id),
    };
    layout.n
        .attr(
            'transform',
            (d) => `translate(${this.settings.margin.left},${this.settings.margin.top / 2})`
        )
        .append('text')
        .attr('text-anchor', 'end')
        .attr('alignment-baseline', 'middle')
        .attr('x', -10)
        .attr('y', 10)
        .text(`n=${set.id.size}`);

    const plot = {
        data,
        layout,
        set,
        scale,
    };

    plot.update = {
        groups: groups.call(this, plot),
        bars: bars.call(this, plot),
        axis: axis.call(this, plot),
        labels: labels.call(this, plot),
        ticker: ticker.call(this, plot),
    };

    return plot;
}
