export default function layout(plot) {
    const canvas = this.util
        .addElement('canvas', this.layout.plots)
        .classed(`asp-canvas--${this.settings.split}`, true);
    const svg = this.util
        .addElement('svg', canvas, 'svg')
        //.attr('viewBox', [0, 0, plot.settings.width, this.settings.height]);
        .attr('width', plot.settings.width)
        .attr('height', this.settings.height);
    const title = this.util
        .addElement('g--title', svg, 'g')
        .attr(
            'transform',
            (d) =>
                `translate(${
                    plot.settings.translateX
                    //plot.settings.margin.left +
                    //(plot.settings.width - plot.settings.margin.right - plot.settings.margin.left) /
                    //    2
                },${plot.settings.margin.top / 2})`
        )
        .append('text')
        //.attr('text-anchor', 'middle')
        .attr('text-anchor', plot.i % 2 === 0 ? 'end' : 'start')
        .attr('alignment-baseline', 'middle')
        .attr('x', -5 * plot.settings.sign)
        .attr('y', 5)
        .text(plot.stratum !== '' ? `${plot.stratum}` : null);
    //.text(plot.stratum !== '' ? `${this.settings.stratum_var} = ${plot.stratum}` : null);

    const n = this.util
        .addElement('g--n', svg, 'g')
        .attr(
            'transform',
            (d) => `translate(${plot.settings.translateX},${this.settings.margin.top / 2})`
        )
        .append('text')
        //.attr('text-anchor', plot.settings.textAnchor)
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'middle')
        //.attr('x', plot.settings.sign * 10)
        .attr('x', (plot.settings.sign * plot.settings.strokeWidth) / 2)
        .attr('y', 5);
    const groups = this.util
        .addElement('g--groups', svg, 'g')
        .style('font', 'bold 12px var(--sans-serif)')
        .style('font-variant-numeric', 'tabular-nums')
        .attr('stroke-opacity', 0.6)
        .attr('fill-opacity', 1);
    const bars = this.util.addElement('g--bars', svg, 'g').attr('fill-opacity', 0.6);
    const xAxisTop = this.util
        .addElement('g--x-axis', svg, 'g')
        .attr('transform', `translate(0,${this.settings.margin.top})`);
    //.call((g) =>
    //    this.util
    //        .addElement('x-axis__label', g, 'text')
    //        .attr(
    //            'x',
    //            plot.settings.mirror
    //                ? plot.settings.width - plot.settings.margin.right - 18
    //                : plot.settings.margin.left + 18
    //        )
    //        .attr('y', -25)
    //        .attr('fill', 'currentColor')
    //        .attr('text-anchor', plot.settings.mirror ? 'end' : 'start')
    //        .attr('alignment-baseline', 'baseline')
    //        .text(plot.settings.mirror ? '← Time (days)' : 'Time (days) →')
    //);
    const xAxisBottom = this.util
        .addElement('g--x-axis', svg, 'g')
        .attr('transform', `translate(0,${this.settings.height - this.settings.margin.bottom})`)
        .call((g) =>
            this.util
                .addElement('x-axis__label', g, 'text')
                .attr(
                    'x',
                    plot.settings.mirror
                        ? plot.settings.width - plot.settings.margin.right - 18
                        : plot.settings.margin.left + 18
                )
                .attr('y', 25)
                .attr('fill', 'currentColor')
                .attr('text-anchor', plot.settings.mirror ? 'end' : 'start')
                .attr('alignment-baseline', 'hanging')
                .text(
                    plot.settings.mirror
                        ? `← Time (${this.settings.timepointUnit}s)`
                        : `Time (${this.settings.timepointUnit}s) →`
                )
        );

    const yAxis = this.util
        .addElement('g--y-axis', svg, 'g')
        .attr('transform', `translate(${this.settings.margin.left},0)`);
    const labels = this.util
        .addElement('g--labels', svg, 'g')
        .style('font', 'bold 12px var(--sans-serif)')
        .style('font-variant-numeric', 'tabular-nums')
        .attr('text-anchor', 'start');
    //const ticker = this.util
    //    .addElement('ticker', svg, 'text')
    //    .attr('text-anchor', plot.settings.mirror ? 'start' : 'end')
    //    .attr(
    //        'x',
    //        plot.settings.mirror
    //            ? plot.settings.margin.left + 18
    //            : plot.settings.width - plot.settings.margin.right - 18
    //    )
    //    .attr('y', this.settings.height - this.settings.margin.bottom - 36)
    //    .attr('dy', '0.32em');
    //.text(`Day ${this.data.timepoints[0][0]}`);

    return {
        canvas,
        svg,
        title,
        n,
        groups,
        bars,
        xAxisTop,
        xAxisBottom,
        yAxis,
        labels,
        //    ticker,
    };
}
