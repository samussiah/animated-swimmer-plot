export default function data(data, stratum) {
    const interpolated = this.data.interpolated.filter((d) => d.stratum === stratum);

    const timepoints = this.data.timepoints.map(([timepoint, data]) => {
        // Define mutable rank given current view.
        const stratumData = data
            .filter((d) => d.stratum === stratum)
            .sort((a, b) => a[`rank${this.settings.view}`] - b[`rank${this.settings.view}`]);

        stratumData.forEach((d, i) => {
            d[`rank${stratum}`] = i;
        });

        return [timepoint, stratumData];
    });

    return {
        mutated: data,
        interpolated,
        timepoints,
    };
}
