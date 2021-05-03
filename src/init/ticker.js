export default function ticker() {
    const now = this.layout.svg
        .append('text')
        .attr('text-anchor', 'end')
        .attr('x', this.settings.width - 6)
        .attr('y', this.settings.height - this.settings.margin.bottom - 12)
        .attr('dy', '0.32em')
        .text(`Day ${this.data.timepoints[0][0]}`);

    return ([timepoint], transition) => {
        transition.end().then(() => now.text(`Day ${timepoint}`));
    };
}
