import toggle from './playPause/toggle';
import updateTimepoint from './updateTimepoint';
import { transitionAnimation } from '../../../init';

export default function range(form) {
    const main = this;
    const label = this.util.addElement('label', form, 'label');
    const output = this.util.addElement('output', label, 'output');
    const input = this.util
        .addElement('input', label, 'input')
        .attr('type', 'range')
        .attr('step', 1);

    input.on('mousedown', function () {
        main.break = true;

        if (main.settings.play) toggle.call(main);
    });

    input.on('change', function () {
        console.log(this.value);
        main.break = true;

        if (main.settings.play) toggle.call(main);

        //d3.timeout(() => {
        updateTimepoint.call(main, +this.value);
        transitionAnimation.call(main, main.data.timepoint);
        //}, this.settings.duration);
    });

    return {
        input,
        output,
    };
}
