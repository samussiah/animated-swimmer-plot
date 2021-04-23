export default function canvas(main) {
    const canvas = this.util.addElement('canvas', main);
    const svg = this.util.addElement('svg', canvas, 'svg')
        .attr('width', this.settings.dimensions.width)
        .attr('height', this.settings.dimensions.height);
    const g = this.util.addElement('g', svg, 'g');

    return {
        canvas,
        svg,
        g,
    };
}
