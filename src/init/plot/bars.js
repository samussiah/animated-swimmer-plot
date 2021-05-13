export default function bars(plot) {
    let bars = plot.layout.bars.selectAll('g');

    const getX = (d) =>
        plot.settings.mirror
            ? plot.scale.x(d.start_timepoint + d.duration)
            : plot.scale.x(d.start_timepoint);
    const getWidth = (d) =>
        plot.settings.mirror
            ? plot.scale.x(d.start_timepoint) - plot.scale.x(d.start_timepoint + d.duration)
            : plot.scale.x(d.start_timepoint + d.duration) - plot.scale.x(d.start_timepoint);

    return ([timepoint, data], transition) => {
        bars = bars
            .data(data, (d) => d.id)
            .join(
                (enter) =>
                    enter
                        .append('g')
                        .attr('height', plot.scale.y.bandwidth())
                        .attr('y', plot.scale.y(plot.set.id.size)),
                (update) => update,
                (exit) =>
                    exit
                        .transition(transition)
                        .remove()
                        .attr('y', plot.scale.y(plot.set.id.size + 1))
            )
            .call((g) => {
                g.transition(transition)
                    .duration(this.settings.duration)
                    .attr(
                        'transform',
                        (d) => `translate(${0},${plot.scale.y(d[`rank${plot.stratum}`])})`
                    );

                const rects = g
                    .selectAll('rect')
                    .data(
                        (d) => d[`states${this.settings.view}`],
                        (d) => d.sequence
                    )
                    .join('rect')
                    .attr('fill', (d) => this.scale.color(d.state))
                    .attr('y', 0)
                    .attr('height', plot.scale.y.bandwidth())
                    .attr('rx', '4px')
                    .attr('ry', '4px')
                    .call((rect) =>
                        rect
                            .transition(transition)
                            .duration(this.settings.duration)
                            .attr('x', (d) => getX(d))
                            .attr('width', (d) => getWidth(d))
                    );
            });
    };
}
