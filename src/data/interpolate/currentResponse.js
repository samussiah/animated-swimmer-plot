export default function currentResponse(states) {
    let total_duration = 0;

    const currentResponse = states
        .map(state => ({ ...state }))
        .reverse()
        .map((state, i, states) => {
            if (i === 0) {
                state.start_timepoint = 1;
            } else {
                state.duration = state.duration;
                total_duration -= state.duration;
                state.start_timepoint = total_duration;
            }
            return state;
        });

    return currentResponse;
}
