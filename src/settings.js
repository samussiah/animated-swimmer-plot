export default function settings() {
    return {
        // data mappings
        id_var: 'USUBJID',
        timepoint_var: 'RSDY',
        result_var: 'RSSTRESC',
        visit_var: 'VISIT',
        visit_order_var: 'VISITNUM',

        // controls
        view: 'overall', // ['overall', 'current-response', 'progression-free']
        play: true,
        timepoint: 0,
        timepointUnit: 'day',
        timepointMin: null,
        timepointMax: null,
        speed: 250,
        speedFactor: 50,

        // dimensions
        dimensions: {
            width: null,
            height: null,
        },
        margin: {
            top: 40,
            right: 100,
            bottom: 20,
            left: 0,
        },
        buttonSize: 50,
        barSize: null,
    };
}
