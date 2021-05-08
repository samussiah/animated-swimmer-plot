export default function settings() {
    return {
        // data mappings
        id_var: 'USUBJID',
        timepoint_var: 'ADY',
        duration_var: 'ADUR',
        censor_var: 'CNSR',
        censor_timepoint_var: 'CNSRDY',
        result_var: 'AVALC',
        result_order_var: 'AVAL',
        result_color_var: 'ACOLOR',
        visit_var: 'AVISIT',
        visit_order_var: 'AVISITN',

        // controls
        view: 'OverallSurvival', // ['OverallSurvival', 'CurrentResponse']
        play: true,
        timepoint: 0,
        timepointUnit: 'day',
        timepointMin: null,
        timepointMax: null,
        duration: 250,
        speedFactor: 50,

        // dimensions
        dimensions: {
            width: null,
            height: null,
        },
        margin: {
            top: 40,
            right: 0,
            bottom: 20,
            left: 100,
        },
        buttonSize: 50,
        barSize: null,

        // miscellaneous
        displayIds: false,
    };
}
