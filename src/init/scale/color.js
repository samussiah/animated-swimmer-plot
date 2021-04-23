export default function color() {
    return d3
        .scaleOrdinal()
        .domain(this.set.result)
        .range(['#d6604d', '#bdbdbd', '#92c5de', '#4393c3', '#2166ac']);
}
