export default function axis() {
  const gTop = this.layout.svg
        .append("g").attr("transform", `translate(0,${this.settings.margin.top})`);
  const gBottom = this.layout.svg
    .append("g")
    .attr("transform", `translate(0,${this.settings.height - this.settings.margin.bottom + 3})`);

  svg
    .append("text")
    .style("font", `bold 12px var(--sans-serif)`)
    .style("font-variant-numeric", "tabular-nums")
    .attr('alignment-baseline', 'baseline')
    .style("font", "bold 12px var(--sans-serif)")
    .style("font-variant-numeric", "tabular-nums")
    .attr("text-anchor", "start")
    .attr("x", 6)
    .attr("y", margin.top - 6)
    .text(`ID`);

  const axisTop = d3
    .axisTop(x)
    .ticks(width / 160)
    .tickSizeOuter(0)
    .tickSizeInner(-barSize * (N + y.padding()));

  const axisBottom = d3
    .axisBottom(x)
    .ticks(width / 160)
    .tickSizeOuter(0)
    .tickSizeInner(0);

  return (_, transition) => {
    gTop.transition(transition).call(axisTop);
    gBottom.transition(transition).call(axisBottom);
    if (view === 'Total Duration') {
      gTop.select(".tick:first-of-type text").remove();
      gBottom.select(".tick:first-of-type text").remove();
    }
    gTop
      .selectAll(".tick:not(:first-of-type) line")
      .attr("stroke", "#999")
      .attr('stroke-opacity', .6);
    gTop.select(".domain").remove();
    gBottom.select(".domain").remove();
  };
}
