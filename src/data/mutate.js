import mapVariables from './mutate/mapVariables';
import encodeResponse from './mutate/encodeResponse';
import addVariables from './mutate/addVariables';
import getDuration from './mutate/getDuration';

export default function mutate(data) {
    const mutated = data.map((d) => {
        const datum = mapVariables.call(this, d);
        encodeResponse.call(this, datum);
        addVariables.call(this, datum);

        return datum;
    });

    // Calculate duration of each response.
    getDuration(mutated);

    return mutated;
}
