import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { runAnimation } from '../../../init';

export default function playPause(form) {
    const button = this.util
        .addElement('button', form, 'button')
        .attr('type', 'button')
        .attr('title', this.settings.play ? 'Pause animation' : 'Play animation');
    const path = this.util.addIcon.call(this, button, (this.settings.play ? faPause : faPlay).icon);

    button.on('click', () => {
        console.log(this.settings.play ? 'pause' : 'play');

        // Break animation loop on pause.
        if (this.settings.play)
            this.break = true;
        // Resume animation on play.
        else
            runAnimation.call(this);

        this.settings.play = !this.settings.play;
        button.attr('title', this.settings.play ? 'Pause animation' : 'Play animation');
        path.attr('d', (this.settings.play ? faPause : faPlay).icon[4]);
    });

    return button;
}
