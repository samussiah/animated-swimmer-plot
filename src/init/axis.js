export default function axis() {
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

    const xAxisTop = d3
        .axisTop(this.scale.x)
        .ticks(this.settings.width / 160)
        .tickSizeOuter(0)
        .tickSizeInner(
            -(this.settings.height - this.settings.margin.top - this.settings.margin.bottom)
        );

    const xAxisBottom = d3
        .axisBottom(this.scale.x)
        .ticks(this.settings.width / 160)
        .tickSizeOuter(0)
        .tickSizeInner(0);

    return (_, transition) => {
        this.layout.xAxisTop.transition(transition).call(xAxisTop);
        this.layout.xAxisBottom.transition(transition).call(xAxisBottom);

        if (this.settings.view === 'OverallSurvival') {
            this.layout.xAxisTop.select('.tick:first-of-type').remove();
            this.layout.xAxisBottom.select('.tick:first-of-type').remove();
        }

        this.layout.xAxisTop
            .selectAll('.tick line')
            .attr('stroke', '#999')
            .attr('stroke-opacity', 0.6);
        //this.layout.xAxisTop.select('.domain').remove();
        //this.layout.xAxisBottom.select('.domain').remove();
    };
}
