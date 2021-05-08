import { faStepBackward } from '@fortawesome/free-solid-svg-icons';
import updateTimepoint from './updateTimepoint';
import { runAnimation } from '../../../init';

export default function stepBackward(form) {
    const button = this.util
        .addElement('button', form, 'button')
        .attr('type', 'button')
        .attr('title', 'Step backward one timepoint');
    const path = this.util.addIcon.call(this, button, faStepBackward.icon);

    button.on('click', () => {
        updateTimepoint.call(this, this.settings.timepoint - 1); // TODO: disable button at maximum timepoint
        console.log(this.settings.timepoint);
        runAnimation.call(this);
        this.settings.play = false;
        // pause animation and proceed to previous timepoint
    });

    return button;
}
