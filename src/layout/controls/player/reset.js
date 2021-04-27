import { faRedo } from '@fortawesome/free-solid-svg-icons';
import updateTimepoint from './updateTimepoint';

export default function reset(form) {
    const button = this.util
        .addElement('button', form, 'button')
        .attr('type', 'button')
        .attr('title', 'Restart animation');
    const path = this.util.addIcon.call(this, button, faRedo.icon);

    button.on('click', () => {
        updateTimepoint.call(this, this.settings.timepointMin); // TODO: disable button at maximum timepoint
        // animation resets to initial timepoint
    });

    return button;
}
