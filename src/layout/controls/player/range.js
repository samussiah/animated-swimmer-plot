import updateTimepoint from './updateTimepoint';
import { runAnimation } from '../../../init';

export default function range(form) {
    const main = this;
    const label = this.util
        .addElement('label', form, 'label')
        .style('display', 'flex')
        .style('align-items', 'center');
    const input = this.util
        .addElement('input', label, 'input')
        .attr('type', 'range')
        .attr('step', 1);
    const output = this.util.addElement('output', label, 'output');
    input.on('change', function () {
        updateTimepoint.call(main, this.value);
        if (this.settings.play)
            runAnimation.call(this);
        // transition animation to selected timepoint
    });

    return {
        input,
        output,
    };
}
