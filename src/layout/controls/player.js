import playerFunctions from './player/index';

export default function player(controls) {
    const container = this.util.addElement('player', controls);
    const form = this.util.addElement('player__form', container, 'form');

    for (const playerFunction in playerFunctions) {
        playerFunctions[playerFunction].call(this, form);
    }
}
