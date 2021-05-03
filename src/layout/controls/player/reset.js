import { faRedo } from '@fortawesome/free-solid-svg-icons';
import updateTimepoint from './updateTimepoint';
import { runAnimation } from '../../../init';

export default function reset(form) {
    const button = this.util
        .addElement('button', form, 'button')
        .attr('type', 'button')
        .attr('title', 'Restart animation');
    const path = this.util.addIcon.call(this, button, faRedo.icon);

    button.on('click', () => {
        updateTimepoint.call(this, this.settings.timepointMin); // TODO: disable button at maximum timepoint
        if (this.settings.play)
            runAnimation.call(this);
        // animation resets to initial timepoint
    });

    return button;
}
