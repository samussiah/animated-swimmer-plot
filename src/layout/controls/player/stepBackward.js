import { fas } from '@fortawesome/free-solid-svg-icons';
import updateTimepoint from './updateTimepoint';

export default function stepBackward(form) {
    const button = this.util.addElement('button', form, 'button')
        .attr('type', 'button')
        .attr('title', 'Step backward one timepoint');
    const path = this.util.addIcon.call(this, button, fas.faStepBackward.icon);

    button.on('click', () => {
        updateTimepoint.call(this, this.settings.timepoint - 1); // TODO: disable button at maximum timepoint
        // pause animation and proceed to previous timepoint
    });

    return button;
}
