export default function getDuration(mutated) {
    d3.rollup(
        mutated,
        (group) => {
            group.sort((a, b) => a.timepoint - b.timepoint);

            d3.pairs(group).forEach((pair, i, pairs) => {
                if (isNaN(pair[0].duration))
                    pair[0].duration = pair[1].timepoint - pair[0].timepoint;
            });

            const last = group[group.length - 1];

            if (isNaN(last.duration))
                last.duration =
                    last.censor_timepoint !== undefined && last.censor_timepoint > last.timepoint
                        ? last.censor_timepoint - last.timepoint
                        : 1;
        },
        (d) => d.id
    );
}
