export default function legend() {
    const width = 64;
    const legend = this.layout.legend
        .selectAll('div')
        .data(this.scale.color.domain())
        .join('div')
        .style('display', 'inline-block')
        .call((div) => {
            const svg = div.append('svg').attr('width', `${width}px`).attr('height', `${width}px`);
            svg.append('rect')
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', width)
                .attr('height', width)
                .attr('fill', (d) => this.scale.color(d));
            svg.append('text')
                .attr('x', width / 2)
                .attr('y', width / 2)
                .attr('text-anchor', 'middle')
                .attr('alignment-baseline', 'hanging')
                .attr('fill', 'white')
                .style('font-weight', 'bold')
                .style('font-size', width / 2)
                .text((d) => d);
        });
}
