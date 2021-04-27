export default function idLabels() {
    let label = this.layout.svg
        .append('g')
        .style('font', 'bold 12px var(--sans-serif)')
        .style('font-variant-numeric', 'tabular-nums')
        .attr('text-anchor', 'start')
        .selectAll('text');

    return ([timepoint, data], transition) => {
        label = label
            .data(data, (d) => d.id)
            .join(
                (enter) =>
                    enter
                        .append('text')
                        .attr('alignment-baseline', 'middle')
                        .attr(
                            'transform',
                            (d) => `translate(${0},${this.scale.y(d[`rank${this.settings.view}`])})`
                        )
                        .attr('x', this.settings.margin.left + 6)
                        .attr('y', this.scale.y.bandwidth() / 2 + 1)
                        .text((d) => d.id),
                (update) => update,
                (exit) =>
                    exit
                        .transition(transition)
                        .remove()
                        .attr(
                            'transform',
                            (d) => `translate(${0},${this.scale.y(this.set.id.size + 1)})`
                        )
            )
            .call((label) =>
                label
                    .transition(transition)
                    .attr(
                        'transform',
                        (d) => `translate(${0},${this.scale.y(d[`rank${this.settings.view}`])})`
                    )
            );
    };
}
