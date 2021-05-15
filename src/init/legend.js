export default function legend() {
    const main = this;
    const width = 128;
    const height = width / 2;
    const swatches = this.layout.legend
        .selectAll('div')
        .data(this.scale.color.domain())
        .join('div')
        .style('display', 'inline-block');

    swatches.each(function (d, i) {
        const swatch = d3.select(this);
        const svg = swatch.append('svg').attr('width', `${width}px`).attr('height', `${height}px`);
        if (i === 0)
            svg.append('text')
                .attr('x', 0)
                .attr('y', 0)
                .attr('alignment-baseline', 'hanging')
                .attr('fill', 'black')
                .style('font-weight', 'bold')
                .style('font-size', height / 4)
                .text(main.settings.criteria);
        svg.append('rect')
            .attr('x', 0)
            .attr('y', height / 4)
            .attr('width', width)
            .attr('height', height)
            .attr('fill', (d) => main.scale.color(d));
        svg.append('text')
            .attr('x', width / 2)
            .attr('y', height / 2)
            .attr('text-anchor', 'middle')
            .attr('alignment-baseline', 'hanging')
            .attr('fill', 'white')
            .style('font-weight', 'bold')
            .style('font-size', height / 3)
            .text((d) => d);
    });

    return {
        width,
        container: this.layout.legend,
        swatches,
    };
}
