import { faStepForward } from '@fortawesome/free-solid-svg-icons';
import toggle from './playPause/toggle';
import updateTimepoint from './updateTimepoint';
import { transitionAnimation } from '../../../init';

export default function stepForward(form) {
    const button = this.util
        .addElement('button', form, 'button')
        .attr('type', 'button')
        .attr('title', 'Step forward one timepoint');
    const path = this.util.addIcon.call(this, button, faStepForward.icon);

    // TODO: disable buttoon at maximum timepoint
    button.on('click', () => {
        this.break = true;

        if (this.settings.play) toggle.call(this);

        d3.timeout(() => {
            updateTimepoint.call(this, this.settings.timepoint + 1);
            transitionAnimation.call(this, this.data.timepoint);
        }, this.settings.duration);
    });

    return button;
}
