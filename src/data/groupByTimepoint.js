export default function groupByTimepoint(interpolated, finalTimepoint) {
    const timepoints = d3.rollups(
        interpolated,
        (group) => {
            // Capture IDs at each timepoint.
            const groupIds = new Set(group.map((d) => d.id));

            // If ID is missing at given timepoint, add final record to 
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
                    const state_order_diff = a.state_order - b.state_order;
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
                    const state_order_diff = a.state_order - b.state_order;
                    const duration_diff = b.duration - a.duration; // sort the earlier responders first
                    const total_duration_diff = a.total_duration - b.total_duration;
                    const id_diff = a.id < b.id ? -1 : 1;

                    return state_order_diff || duration_diff || total_duration_diff || id_diff;
                })
                .forEach((d, i) => {
                    d.rankCurrentResponse = i;
                });

            // Define mutable rank given current view.
            group
                .sort((a,b) => a[`rank${this.settings.view}`] - b[`rank${this.settings.view}`])
                .forEach((d,i) => {
                    d.rank = i;
                });

            return group;
        },
        (d) => d.timepoint
    );

    return timepoints;
}
