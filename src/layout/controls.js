import addPlayer from './controls/player';
import addView from './controls/view';

export default function controls(main) {
    const container = this.util.addElement(controls, main);
    const player = addPlayer.call(this, container);
    const view = addView.call(this, container);

    return {
        container,
        player,
        view,
    };
}
