import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

export default function playPause(form) {
    const button = this.util
        .addElement('button', form, 'button')
        .attr('type', 'button')
        .attr('title', this.settings.play ? 'Pause animation' : 'Play animation');
    const path = this.util.addIcon.call(this, button, (this.settings.play ? faPause : faPlay).icon);

    button.on('click', () => {
        console.log(this.settings.play ? 'pause' : 'play');
        this.settings.play = !this.settings.play;
        button.attr('title', this.settings.play ? 'Pause animation' : 'Play animation');
        path.attr('d', (this.settings.play ? faPause : faPlay).icon[4]);
        this.layout.svg.interrupt();
        // pause or resume animation
    });

    return button;
}
