import { fas } from '@fortawesome/free-solid-svg-icons';

export default function playPause(form) {
    const button = this.util.addElement('button', form, 'button')
        .attr('type', 'button')
        .attr('title', this.settings.play
            ? 'Pause animation'
            : 'Play animation'
        );
    const icon = fas[this.settings.play
        ? 'faPause'
        : 'faPlay'
    ].icon;

    const path = this.util.addIcon.call(this, button, icon);

    button.on('click', () => {
        console.log(this.settings.play ? 'pause' : 'play');
        this.settings.play = !this.settings.play;
        button.attr('title', this.settings.play
            ? 'Pause animation'
            : 'Play animation'
        );
        const icon = fas[this.settings.play ? 'faPause' : 'faPlay'].icon;
        path.attr('d', icon[4]);
        // pause or resume animation
    });
}
