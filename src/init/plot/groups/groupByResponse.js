export default function groupByResponse(plot, data) {
    const groupedByResponse = d3.rollups(
        data,
        (group) => {
            group.sort((a, b) => a[`rank${plot.stratum}`] - b[`rank${plot.stratum}`]);
            return {
                state: group[0].state,
                state_order: group[0].state_order,
                n: group.length,
                rankMin: group[0][`rank${plot.stratum}`],
                rankMax: group[group.length - 1][`rank${plot.stratum}`],
                pct: d3.format('.0%')(group.length / plot.set.id.size),
            };
        },
        (d) => d.state
    );

    return groupedByResponse;
}
