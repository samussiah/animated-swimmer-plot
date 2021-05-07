export default function canvas(main) {
    const canvas = this.util.addElement('canvas', main);
    const svg = this.util
        .addElement('svg', canvas, 'svg')
        .attr('viewBox', [0, 0, this.settings.width, this.settings.height]);
    //.attr('width', this.settings.width)
    //.attr('height', this.settings.height);
    const n = this.util.addElement('g--n', svg, 'g');
    const groups = this.util.addElement('g--groups', svg, 'g');
    const bars = this.util.addElement('g--bars', svg, 'g');
    const xAxisTop = this.util
        .addElement('g--x-axis', svg, 'g')
        .attr('transform', `translate(0,${this.settings.margin.top})`);
    const xAxisBottom = this.util
        .addElement('g--x-axis', svg, 'g')
        .attr('transform', `translate(0,${this.settings.height - this.settings.margin.bottom})`);
    const yAxis = this.util
        .addElement('g--y-axis', svg, 'g')
        .attr('transform', `translate(${this.settings.margin.left},0)`);
    const labels = this.util.addElement('g--labels', svg, 'g');

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
    };
}
