import currentResponse from './interpolate/currentResponse';

//  input data: one record per ID per visit/response
// output data: one record per ID per day on study
export default function interpolate(data) {
    const interpolated = d3.rollup(
        data,
        (group) => {
            const long = [];

            let state;
            let state_duration;
            let states = [];
            let total_duration = 0;
            let sequence = 0;

            // TODO: add final state to output data, i.e. the final response/visit/cycle - need to use a pre-defined duration
            //
            // Pair each record for the given participant to define a start and end timepoint.
            group
                .sort((a, b) => a.timepoint - b.timepoint)
                .forEach((d, i) => {
                    // Update state initially and when state changes.
                    if (i === 0 || d.result !== group[i - 1].result) {
                        state = d.result;
                        state_duration = 0;
                        states.push({
                            state, // current state
                            start_timepoint: total_duration, // starting timepoint of current state,
                            duration: 0, // duration of current state
                            sequence,
                        }); // TODO: retain the total duration up to the current state
                        sequence++;
                    }

                    // Define an item for each day between the current timepoint (pair[0]) and the next timepoint (pair[1]).
                    for (let i = 0; i < d.duration; i++) {
                        const datum = { ...d };

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
                    state_duration = state_duration + d.duration;
                    total_duration += d.duration;
                });

            return long;
        },
        (d) => d.id
    );

    const flattened = [...interpolated.values()].flatMap((d) => d);

    return flattened;
}
