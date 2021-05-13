export default function legend() {
    const main = this;
    const width = 64;
    const swatches = this.layout.legend
        .selectAll('div')
        .data(this.scale.color.domain())
        .join('div')
        .style('display', 'inline-block');

    swatches.each(function (d, i) {
        const swatch = d3.select(this);
        const svg = swatch.append('svg').attr('width', `${width}px`).attr('height', `${width}px`);
        if (i === 0)
            svg.append('text')
                .attr('x', 0)
                .attr('y', 0)
                .attr('alignment-baseline', 'hanging')
                .attr('fill', 'black')
                .style('font-weight', 'bold')
                .style('font-size', width / 4)
                .text(main.settings.criteria);
        svg.append('rect')
            .attr('x', 0)
            .attr('y', width / 4)
            .attr('width', width)
            .attr('height', width - width / 4)
            .attr('fill', (d) => main.scale.color(d));
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

    return {
        width,
        container: this.layout.legend,
        swatches,
    };
}
