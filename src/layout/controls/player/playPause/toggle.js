import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

export default function toggle() {
    console.log(this.settings.play ? 'pause' : 'play');
    this.settings.play = !this.settings.play;

    this.controls.playPause.attr(
        'title',
        this.settings.play ? 'Pause animation' : 'Play animation'
    );
    this.controls.playPause
        .select('path')
        .attr('d', (this.settings.play ? faPause : faPlay).icon[4]);
}
