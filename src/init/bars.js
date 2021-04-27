export default function bars() {
    let g = this.layout.svg.append('g').attr('fill-opacity', 0.6).selectAll('g');

    return ([timepoint, data], transition) => {
        g = g
            .data(data, (d) => d.id)
            .join(
                (enter) =>
                    enter
                        .append('g')
                        .attr('height', this.scale.y.bandwidth())
                        .attr('y', this.scale.y(this.set.id.size)),
                (update) => update,
                (exit) =>
                    exit
                        .transition(transition)
                        .remove()
                        .attr('y', this.scale.y(this.set.id.size + 1))
            )
            .call((g) => {
                g.transition(transition)
                    .duration(this.settings.duration)
                    .attr(
                        'transform',
                        (d) => `translate(${0},${this.scale.y(d[`rank${this.settings.view}`])})`
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
                    .attr('height', this.scale.y.bandwidth())
                    .attr('rx', '4px')
                    .attr('ry', '4px')
                    .call((rect) =>
                        rect
                            .transition(transition)
                            .duration(this.settings.duration)
                            .attr('x', (d) => this.scale.x(d.start_timepoint))
                            .attr(
                                'width',
                                (d) =>
                                    this.scale.x(d.start_timepoint + d.duration) -
                                    this.scale.x(d.start_timepoint)
                            )
                    );
                //console.log(rects);
                //this.layout.svg.interrupt().selectAll('*').interrupt();
            });
    };
}
