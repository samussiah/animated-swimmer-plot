export default function axis(plot) {
    //this.layout.svg
    //    .append('text')
    //    .style('font', `bold 12px var(--sans-serif)`)
    //    .style('font-variant-numeric', 'tabular-nums')
    //    .attr('alignment-baseline', 'baseline')
    //    .style('font', 'bold 12px var(--sans-serif)')
    //    .style('font-variant-numeric', 'tabular-nums')
    //    .attr('text-anchor', 'start')
    //    .attr('x', this.settings.margin.left + 6)
    //    .attr('y', this.settings.margin.top - 6)
    //    .text(`ID`);

    plot.xAxisTop = d3
        .axisTop(plot.scale.x)
        .ticks(this.settings.width / 160)
        .tickSizeOuter(0)
        .tickSizeInner(
            -(this.settings.height - this.settings.margin.top - this.settings.margin.bottom)
        );

    plot.xAxisBottom = d3
        .axisBottom(plot.scale.x)
        .ticks(this.settings.width / 160)
        .tickSizeOuter(0)
        .tickSizeInner(0);

    return (_, transition) => {
        plot.layout.xAxisTop.transition(transition).call(plot.xAxisTop);
        plot.layout.xAxisBottom.transition(transition).call(plot.xAxisBottom);

        //if (this.settings.view === 'OverallSurvival') {
        //    plot.layout.xAxisTop.select('.tick:first-of-type').remove();
        //    plot.layout.xAxisBottom.select('.tick:first-of-type').remove();
        //}

        plot.layout.xAxisTop
            .selectAll('.tick line')
            .attr('stroke', '#999')
            .attr('stroke-opacity', 0.6);
        plot.layout.xAxisTop.select('.domain').remove();
        plot.layout.xAxisBottom.select('.domain').remove();
    };
}
