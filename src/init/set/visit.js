export default function visit() {
    const set = d3.rollups(
        this.data.mutated.filter((d) => !/Unscheduled/.test(d.visit) && d.timepoint > 1),
        (group) => d3.median(group, (d) => d.timepoint),
        (d) => d.visit
    );

    return set;
}
