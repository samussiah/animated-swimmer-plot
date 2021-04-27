export default function x() {
    return d3
        .scaleLinear()
        .domain([0, 1])
        .range([this.settings.margin.left, this.settings.width - this.settings.margin.right]);
}
