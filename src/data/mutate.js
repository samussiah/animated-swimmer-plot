export default function mutate(data) {
    const mutated = data.map((d) => {
        const datum = {};

        for (const setting of Object.keys(this.settings).filter((key) => /_var$/.test(key))) {
            const variable = setting.replace(/_var$/, '');
            datum[variable] = ['timepoint', 'visit_order'].includes(variable)
                ? +d[this.settings[setting]]
                : d[this.settings[setting]];
        }

        // TODO: use a variable from the data
        datum.result_order =
            datum.result === 'CR'
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
            datum.result === 'CR'
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

    return mutated;
}
