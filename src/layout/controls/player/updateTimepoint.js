export default function updateTimepoint(timepoint) {
    this.settings.timepoint = timepoint;
    this.data.timepoint = this.data.timepoints.find((d) => d[0] === timepoint);
    this.plots.forEach((plot) => {
        plot.data.timepoint = plot.data.timepoints.find((d) => d[0] === timepoint);
    });
    this.layout.ticker.text(
        `${this.settings.timepointPrefix} ${this.settings.timepointUnit} ${timepoint}`
    );
    this.controls.range.input.property('value', timepoint);
    this.controls.range.output.text(
        `${this.settings.timepointPrefix} ${this.settings.timepointUnit} ${timepoint}`
    );
}
