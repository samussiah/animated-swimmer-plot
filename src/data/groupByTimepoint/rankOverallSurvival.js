export default function rankOverallSurvival(group) {
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
}
