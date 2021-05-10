export default function color() {
    return d3
        .scaleOrdinal()
        .domain(this.set.result)
        .range(
            this.set.result_color.length > 1
                ? this.set.result_color.concat(d3.schemeTableau10)
                : d3.schemeTableau10
        );
}
