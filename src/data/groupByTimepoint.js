export default function groupByTimepoint(interpolated, finalTimepoint) {
    const timepoints = d3.rollups(
        interpolated,
        (group) => {
            const groupIds = new Set(group.map((d) => d.id));

            finalTimepoint.forEach(([key, value]) => {
                if (groupIds.has(key) === false) group.push({ ...value });
            });

            // In overall view, sort by:
            //   1. current state
            //   3. descending total duration
            //   2. descending duration of current state
            //   4. ID
            group
                .sort((a, b) => {
                    const state_order_diff = b.state_order - a.state_order;
                    const total_duration_diff = b.total_duration - a.total_duration;
                    const duration_diff = b.duration - a.duration;
                    const id_diff = a.id < b.id ? -1 : 1;

                    return state_order_diff || total_duration_diff || duration_diff || id_diff;
                })
                .forEach((d, i) => {
                    d.rankOverallSurvival = i; // rank positions IDs along y-axis
                });

            // In current state view, sort by:
            // 1. current state
            // 2. descending duration of current state
            // 3. descending total duration
            // 4. ID
            group
                .sort((a, b) => {
                    const state_order_diff = b.state_order - a.state_order;
                    const duration_diff = b.duration - a.duration; // sort the earlier responders first
                    const total_duration_diff = a.total_duration - b.total_duration;
                    const id_diff = a.id < b.id ? -1 : 1;

                    return state_order_diff || duration_diff || total_duration_diff || id_diff;
                })
                .forEach((d, i) => {
                    d.rankCurrentResponse = i;
                });

            return group;
        },
        (d) => d.timepoint
    );

    return timepoints;
}
