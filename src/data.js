import mutate from './data/mutate';
import interpolate from './data/interpolate';
import groupByTimepoint from './data/groupByTimepoint';

export default function data(data) {
    const mutated = mutate.call(this, data);
    const interpolated = interpolate.call(this, mutated);
    const finalTimepoint = d3.rollups(
        interpolated,
        group => group[group.length - 1],
        d => d.id
    );
    const timepoints = groupByTimepoint.call(this, interpolated, finalTimepoint);

    return {
        data,
        mutated,
        interpolated,
        finalTimepoint,
        timepoints,
    };
}
