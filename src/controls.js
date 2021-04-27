export default function controls() {
    const controls = {
        container: this.layout.controls,
        player: this.layout.player,
        ...this.layout.player,
        view: this.layout.view,
    };

    // Update settings.
    this.settings.timepointMin = d3.min(this.data.timepoints, ([d]) => d);
    this.settings.timepointMax = d3.max(this.data.timepoints, ([d]) => d);
    this.settings.timepoint =
        this.settings.timepoint !== undefined &&
        this.settings.timepoint >= this.settings.timepointMin &&
        this.settings.timepoint <= this.settings.timepointMax
            ? this.settings.timepoint
            : this.settings.timepointMin;

    // Update controls.
    controls.range.input
        .attr('min', this.settings.timepointMin)
        .attr('max', this.settings.timepointMax)
        .attr('value', this.settings.timepoint);
    controls.range.output.text(`${this.settings.timepointUnit} ${this.settings.timepoint}`);

    return controls;
}
