export default function layout(main, width) {
    const canvas = this.util.addElement('canvas', main);
    const svg = this.util
        .addElement('svg', canvas, 'svg')
        .attr('viewBox', [0, 0, width, this.settings.height]);
    //.attr('width', width)
    //.attr('height', this.settings.height);
    const n = this.util.addElement('g--n', svg, 'g');
    const groups = this.util.addElement('g--groups', svg, 'g')
        .style('font', 'bold 12px var(--sans-serif)')
        .style('font-variant-numeric', 'tabular-nums')
        .attr('stroke-opacity', 0.6)
        .attr('fill-opacity', 1);
    const bars = this.util.addElement('g--bars', svg, 'g')
        .attr('fill-opacity', 0.6);
    const xAxisTop = this.util
        .addElement('g--x-axis', svg, 'g')
        .attr('transform', `translate(0,${this.settings.margin.top})`);
    const xAxisBottom = this.util
        .addElement('g--x-axis', svg, 'g')
        .attr('transform', `translate(0,${this.settings.height - this.settings.margin.bottom})`);
    const yAxis = this.util
        .addElement('g--y-axis', svg, 'g')
        .attr('transform', `translate(${this.settings.margin.left},0)`);
    const labels = this.util.addElement('g--labels', svg, 'g')
        .style('font', 'bold 12px var(--sans-serif)')
        .style('font-variant-numeric', 'tabular-nums')
        .attr('text-anchor', 'start');
    const ticker = this.util
        .addElement('ticker', svg, 'text')
        .attr('text-anchor', 'end')
        .attr('x', width - 18)
        .attr('y', this.settings.height - this.settings.margin.bottom - 36)
        .attr('dy', '0.32em');
    //.text(`Day ${this.data.timepoints[0][0]}`);

    return {
        canvas,
        svg,
        n,
        groups,
        bars,
        xAxisTop,
        xAxisBottom,
        yAxis,
        labels,
        ticker,
    };
}
