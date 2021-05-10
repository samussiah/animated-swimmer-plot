export default function labels(plot) {
    let labels = plot.layout.labels.selectAll('text');

    return ([timepoint, data], transition) => {
        labels = labels
            .data(data, (d) => d.id)
            .join(
                (enter) =>
                    enter
                        .append('text')
                        .attr('alignment-baseline', 'middle')
                        .attr(
                            'transform',
                            (d) => `translate(${0},${plot.scale.y(d[`rank${plot.stratum}`])})`
                        )
                        .attr('x', this.settings.margin.left + 6)
                        .attr('y', plot.scale.y.bandwidth() / 2 + 1)
                        .text((d) => d.id),
                (update) => update,
                (exit) =>
                    exit
                        .transition(transition)
                        .remove()
                        .attr(
                            'transform',
                            (d) => `translate(${0},${plot.scale.y(plot.set.id.size + 1)})`
                        )
            )
            .call((label) =>
                label
                    .transition(transition)
                    .attr(
                        'transform',
                        (d) => `translate(${0},${plot.scale.y(d[`rank${plot.stratum}`])})`
                    )
            );
    };
}
