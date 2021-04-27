export default function mutate(data) {
    const mutated = data.map((d) => {
        const datum = {};

        for (const setting of Object.keys(this.settings).filter((key) => /_var$/.test(key))) {
            const variable = setting.replace(/_var$/, '');
            datum[variable] = ['timepoint', 'visit_order'].includes(variable)
                ? +d[this.settings[setting]]
                : d[this.settings[setting]];
        }

        datum.result_order =
            datum.result === 'PD'
                ? -1
                : datum.result === 'NE'
                ? 0
                : datum.result === 'SD'
                ? 1
                : datum.result === 'PR'
                ? 2
                : datum.result === 'CR'
                ? 3
                : null;

        return datum;
    });

    return mutated;
}
