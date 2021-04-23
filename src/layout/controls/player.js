import playerFunctions from './player/index';

export default function player(controls) {
    const container = this.util.addElement('player', controls);
    const form = this.util.addElement('player__form', container, 'form');
    const player = {};

    for (const playerFunction in playerFunctions) {
        player[playerFunction] = playerFunctions[playerFunction].call(this, form);
    }

    return player;
}
