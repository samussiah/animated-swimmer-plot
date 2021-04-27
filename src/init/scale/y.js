export default function y() {
    return d3
        .scaleBand()
        .domain(d3.range(this.set.id.size).reverse())
        .range([this.settings.height - this.settings.margin.bottom, this.settings.margin.top])
        .padding(0.1);
}
