export default function y(id) {
    return d3
        .scaleBand()
        .domain(d3.range(id.size).reverse())
        .range([this.settings.height - this.settings.margin.bottom, this.settings.margin.top])
        .padding(this.settings.padding);
}
