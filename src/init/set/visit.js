export default function visit(data) {
    const set = d3.rollups(
        data.filter((d) => !/Unscheduled/.test(d.visit) && d.timepoint > 1),
        (group) => d3.median(group, (d) => d.timepoint),
        (d) => d.visit
    );

    return set;
}
