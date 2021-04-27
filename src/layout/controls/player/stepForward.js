import { faStepForward } from '@fortawesome/free-solid-svg-icons';
import updateTimepoint from './updateTimepoint';

export default function stepForward(form) {
    const button = this.util
        .addElement('button', form, 'button')
        .attr('type', 'button')
        .attr('title', 'Step forward one timepoint');
    const path = this.util.addIcon.call(this, button, faStepForward.icon);
    button.on('click', () => {
        updateTimepoint.call(this, this.settings.timepoint + 1); // TODO: disable button at maximum timepoint
        // pause animation and proceed to next timepoint
    });

    return button;
}
