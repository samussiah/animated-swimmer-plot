export default function range(form) {
    const main = this;
    const label = this.util.addElement('label', form, 'label')
        .style('display', 'flex')
        .style('align-items', 'center');
    const input = this.util.addElement('input', label, 'input')
        .attr('type', 'range')
        .attr('min', this.settings.timepointMin)
        .attr('max', this.settings.timepointMax)
        .attr('value', this.settings.timepoint)
        .attr('step', 1);
    const output = this.util.addElement('output', label, 'output')
        .text(`${this.settings.timepointUnit} ${this.settings.timepoint}`);
    input.on('change', function() {
        main.settings.timepoint = this.value;
        output.text(`${main.settings.timepointUnit} ${main.settings.timepoint}`);
        console.log(main.settings.timepoint);
        // transition animation to selected timepoint
    });
}
