export default function y() {
    return d3.scaleBand()
        .domain(d3.range(this.set.id.size + 1))
        .rangeRound([this.settings.margin.top, this.settings.margin.top + this.settings.barSize * (this.set.id.size + 1 + 0.1)])
        //.rangeRound([margin.top, height - margin.bottom])
        .padding(0.1);
}
