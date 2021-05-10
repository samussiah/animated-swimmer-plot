import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import toggle from './playPause/toggle';
import { runAnimation } from '../../../init';

export default function playPause(form) {
    const button = this.util
        .addElement('button', form, 'button')
        .attr('type', 'button')
        .attr('title', this.settings.play ? 'Pause animation' : 'Play animation');
    const path = this.util.addIcon.call(this, button, (this.settings.play ? faPause : faPlay).icon);

    button.on('click', () => {
        toggle.call(this);

        // Break animation loop on pause.
        if (this.settings.play === false && this.break === undefined) this.break = true;
        // Resume animation on play.
        else {
            delete this.break;
            runAnimation.call(this);
        }
    });

    return button;
}
