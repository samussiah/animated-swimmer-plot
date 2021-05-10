import addPlayer from './controls/player';
import addView from './controls/view';

export default function controls(main) {
    const controls = this.util.addElement('controls', main);
    const view = addView.call(this, controls);
    const player = addPlayer.call(this, controls);

    return {
        controls,
        view,
        player,
    };
}
