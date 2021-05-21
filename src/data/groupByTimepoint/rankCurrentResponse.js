export default function rankCurrentResponse(group) {
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
}
