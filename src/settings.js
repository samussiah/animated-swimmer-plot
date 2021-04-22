export default function settings() {
    return {
        play: true,
        timepoint: 0,
        timepointUnit: 'day',
        timepointMin: 0, // TODO: needs to be data-driven
        timepointMax: 100, // TODO: needs to be data-driven
        speed: 250,
        speedFactor: 50,
        view: 'overall', // ['overall', 'current-response', 'progression-free']
        margin: {
            top: 40,
            right: 100,
            bottom: 20,
            left: 0,
        },
        buttonSize: 50,
    };
}
