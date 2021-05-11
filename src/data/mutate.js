export default function mutate(data) {
    const mutated = data.map((d) => {
        const datum = {};

        for (const setting of Object.keys(this.settings).filter((key) => /_var$/.test(key))) {
            const variable = setting.replace(/_var$/, '');
            datum[variable] = [
                'timepoint',
                'duration',
                'censor_timepoint',
                'result_order',
                'visit_order',
            ].includes(variable)
                ? +d[this.settings[setting]]
                : d[this.settings[setting]];
        }

        // TODO: use a variable from the data
        datum.result_order =
            d[this.settings.result_order_var] !== undefined
                ? d[this.settings.result_order_var]
                : datum.result === 'CR'
                ? 0
                : datum.result === 'PR'
                ? 1
                : datum.result === 'SD'
                ? 2
                : datum.result === 'NE'
                ? 3
                : datum.result === 'UN'
                ? 4
                : datum.result === 'PD'
                ? 5
                : null;

        // TODO: use a variable from the data
        datum.result_color =
            d[this.settings.result_color_var] !== undefined
                ? d[this.settings.result_color_var]
                : datum.result === 'CR'
                ? '#2166ac'
                : datum.result === 'PR'
                ? '#4393c3'
                : datum.result === 'SD'
                ? '#92c5de'
                : datum.result === 'NE'
                ? '#969696'
                : datum.result === 'UN'
                ? '#bdbdbd'
                : datum.result === 'PD'
                ? '#d6604d'
                : null;

        return datum;
    });

    // Calculate duration of each response.
    d3.rollup(
        mutated,
        (group) => {
            group.sort((a, b) => a.timepoint - b.timepoint);

            d3.pairs(group).forEach((pair, i, pairs) => {
                if (pair[0].duration === undefined)
                    pair[0].duration = pair[1].timepoint - pair[0].timepoint;
            });

            const last = group[group.length - 1];

            if (last.duration === undefined)
                last.duration =
                    last.censor_timepoint !== undefined
                        ? last.censor_timepoint - last.timepoint
                        : 1;
        },
        (d) => d.id
    );

    return mutated;
}
