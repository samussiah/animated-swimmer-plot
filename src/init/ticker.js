export default function ticker() {
    const now = this.layout.svg
        .append('text')
        .attr('text-anchor', 'end')
        .attr('x', this.settings.width - 6)
        .attr('y', this.settings.margin.top + this.scale.y.bandwidth() * (this.set.id.size - 0.45))
        .attr('dy', '0.32em')
        .text(this.data.timepoints[0][0]);

    return ([timepoint], transition) => {
        transition.end().then(() => now.text(timepoint));
    };
}
