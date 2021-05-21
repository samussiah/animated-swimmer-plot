export default function mapVariables(d) {
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

    return datum;
}
