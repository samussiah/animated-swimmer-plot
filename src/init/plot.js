// layout
import plotLayout from './plot/layout';

// data
import plotData from './plot/data';

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

export default function plot(data = null, stratum = '', i = 0) {
    const plot = {
        stratum,
        i,
    };

    plot.settings = {
        width: Math.floor(this.settings.width * this.settings.splitFactor),
        margin: {
            ...this.settings.margin,
            left: i % 2 === 0 ? this.settings.margin.right : this.settings.margin.left,
            right: i % 2 === 0 ? this.settings.margin.left : this.settings.margin.right,
        },
        textAnchor: plot.i % 2 === 0 ? 'start' : 'end',
        sign: plot.i % 2 === 0 ? 1 : -1,
    };
    plot.settings.translateX =
        i % 2 === 0 ? plot.settings.width - plot.settings.margin.right : plot.settings.margin.left;
    plot.settings.strokeWidth = i === 0 ? plot.settings.margin.right : plot.settings.margin.left;

    plot.layout = plotLayout.call(this, plot);

    plot.data = data === null ? this.data : plotData.call(this, data, stratum);

    plot.set = {
        id: id.call(this, plot.data.mutated),
    };

    plot.scale = {
        x: x.call(this, [
            plot.settings.margin.left,
            plot.settings.width - plot.settings.margin.right,
        ]),
        y: y.call(this, plot.set.id),
    };

    plot.layout.n.text(`n=${plot.set.id.size}`);

    plot.update = {
        groups: groups.call(this, plot),
        bars: bars.call(this, plot),
        axis: axis.call(this, plot),
        labels: labels.call(this, plot),
        ticker: ticker.call(this, plot),
    };

    console.log(plot);

    return plot;
}
