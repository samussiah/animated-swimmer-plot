export default function updateTimepoint(timepoint) {
    this.settings.timepoint = timepoint;
    this.data.timepoint = this.data.timepoints.find((d) => d[0] === timepoint);
    this.controls.range.input.property('value', timepoint);
    this.controls.range.output.text(
        `${/*this.settings.timepointUnit*/ 'Day'} ${this.settings.timepoint}`
    );
}
