export default function updateTimepoint(timepoint) {
    this.settings.timepoint = timepoint;
    this.controls.range.input
        .property('value', timepoint);
    this.controls.range.output
        .text(`${this.settings.timepointUnit} ${this.settings.timepoint}`);
    console.log(this.settings.timepoint);
}
