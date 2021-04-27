export default function groupByResponse(data) {
    const groupedByResponse = d3.rollups(
        data,
        (group) => {
            group.sort((a, b) => a[`rank${this.settings.view}`] - b[`rank${this.settings.view}`]);
            return {
                state: group[0].state,
                state_order: group[0].state_order,
                n: group.length,
                rankMin: group[0][`rank${this.settings.view}`],
                rankMax: group[group.length - 1][`rank${this.settings.view}`],
                pct: d3.format('.0%')(group.length / this.set.id.size),
            };
        },
        (d) => d.state
    );

    return groupedByResponse;
}
