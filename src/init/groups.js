import groupByResponse from './groups/groupByResponse';

export default function groups() {
    let g = this.layout.svg
        .append('g')
        .style('font', 'bold 12px var(--sans-serif)')
        .style('font-variant-numeric', 'tabular-nums')
        .attr('stroke-opacity', 0.6)
        .attr('fill-opacity', 1)
        .selectAll('g');

    return ([timepoint, data], transition) =>
        (g = g
            .data(groupByResponse.call(this, data), (d) => d[0])
            .join(
                (enter) =>
                    enter
                        .append('g')
                        .attr(
                            'transform',
                            (d) =>
                                `translate(${this.settings.margin.left},${this.scale.y(
                                    d[1].rankMin
                                )})`
                        )
                        .call((g) => {
                            //g.append('text')
                            //    .classed('asp-text asp-text--group', true)
                            //    .attr('text-anchor', 'end')
                            //    .attr('alignment-baseline', 'middle')
                            //    .attr('x', -5)
                            //    .attr('y', this.scale.y.bandwidth() / 2 + 1)
                            //    .text((d) => `${d[0]}`);
                            g.append('text')
                                .classed('asp-text asp-text--percent', true)
                                .attr('text-anchor', 'end')
                                .attr('alignment-baseline', 'middle')
                                .attr('x', -10)
                                //.attr('y', this.scale.y.bandwidth() / 2 + 1)
                                .attr(
                                    'y',
                                    (d) =>
                                        (this.scale.y(d[1].rankMax) - this.scale.y(d[1].rankMin)) /
                                            2 +
                                        this.scale.y.bandwidth() / 2 +
                                        1
                                )
                                .text((d) => `${d[1].n} (${d[1].pct})`);
                            g.append('line')
                                .classed('asp-line asp-line--group', true)
                                .attr('x1', -5)
                                .attr('x2', -5)
                                .attr('y1', 0)
                                .attr('y2', 0)
                                .attr('stroke', (d) => this.scale.color(d[0]))
                                .attr('stroke-width', 5);
                        }),
                (update) => update,
                (exit) => {
                    exit.select('line.asp-line--group')
                        .transition(transition)
                        .duration(this.settings.duration)
                        .attr('y2', 0);
                    exit.transition(transition)
                        .duration(this.settings.duration)
                        .attr('stroke-opacity', 0)
                        .attr('fill-opacity', 0)
                        .remove();
                }
            )
            .call((g) => {
                g.transition(transition)
                    .duration(this.settings.duration)
                    .attr(
                        'transform',
                        (d) =>
                            `translate(${this.settings.margin.left},${this.scale.y(d[1].rankMin)})`
                    );
                g.select('text.asp-text--percent')
                    .transition(transition)
                    .duration(this.settings.duration)
                    .attr(
                        'y',
                        (d) =>
                            (this.scale.y(d[1].rankMax) - this.scale.y(d[1].rankMin)) / 2 +
                            this.scale.y.bandwidth() / 2 +
                            1
                    )
                    .text((d) => `${d[1].n} (${d[1].pct})`);
                const line = g
                    .select('line.asp-line--group')
                    .transition(transition)
                    .duration(this.settings.duration)
                    .attr(
                        'y2',
                        (d) =>
                            this.scale.y(d[1].rankMax) -
                            this.scale.y(d[1].rankMin) +
                            this.scale.y.bandwidth()
                    );
            }));
}
