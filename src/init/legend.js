export default function legend() {
    const main = this;
    const width = this.settings.width / this.scale.color.domain().length;
    const height = 50;
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
            .attr('rx', '8px')
            .attr('ry', '8px')
            .attr('width', width - 4)
            .attr('height', height - height / 4)
            .attr('fill', (d) => main.scale.color(d));
        svg.append('text')
            .attr('x', width / 2)
            .attr('y', height / 4 + (3.25 * height) / 8)
            .attr('text-anchor', 'middle')
            .attr('alignment-baseline', 'middle')
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
