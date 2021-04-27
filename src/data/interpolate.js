import currentResponse from './interpolate/currentResponse';

export default function interpolate(data) {
    const interpolated = d3.rollup(
        data,
        (group) => {
            const long = [];

            group.sort((a, b) => a.timepoint - b.timepoint);

            let state;
            let state_duration;
            let states = [];
            let total_duration = 0;
            let sequence = 0;

            d3.pairs(group).forEach((pair, i, pairs) => {
                // Update state initially and when state changes.
                if (i === 0 || pair[0].result !== pairs[i - 1][0].result) {
                    state = pair[0].result;
                    state_duration = 0;
                    states.push({
                        state, // current state
                        start_timepoint: total_duration, // starting timepoint of current state,
                        duration: 0, // duration of current state
                        sequence,
                    }); // TODO: retain the total duration up to the current state
                    sequence++;
                }

                const duration = pair[1].timepoint - pair[0].timepoint || 1;

                // Define an item for each day between the current timepoint (pair[0]) and the next timepoint (pair[1]).
                for (let i = 0; i < duration; i++) {
                    const datum = { ...pair[0] };

                    datum.timepoint = datum.timepoint + i; // Increment timepoint.
                    datum.duration = state_duration + i + 1; // Increment duration of current state.
                    datum.total_duration = total_duration + i + 1; // Increment total duration.
                    states[states.length - 1].duration++; // Increase duration of the current state.
                    datum.statesOverallSurvival = states.map((state) => ({ ...state }));
                    datum.statesCurrentResponse = currentResponse(datum.statesOverallSurvival);
                    datum.state = datum.result;
                    datum.state_order = datum.result_order;

                    long.push(datum);
                }

                // Add difference between timepoints to duration.
                state_duration = state_duration + duration;
                total_duration += duration;
            });

            return long;
        },
        (d) => d.id
    );

    const flattened = [...interpolated.values()].flatMap((d) => d);

    return flattened;
}
