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
        stratum_var: null,

        // controls
        view: 'OverallSurvival', // ['OverallSurvival', 'CurrentResponse']
        split: 'vertical', // ['vertical', 'horizontal']
        splitFactor: 1,
        play: true,
        timepoint: 1,
        timepointUnit: 'day',
        timepointMin: null,
        timepointMax: null,
        duration: 250,
        delay: 5000,
        speedFactor: 50,

        // dimensions
        dimensions: {
            width: null,
            height: null,
        },
        margin: {
            top: 60,
            right: 10,
            bottom: 50,
            left: 125,
        },
        padding: 0.1,
        buttonSize: 50,
        barSize: null,

        // miscellaneous
        displayIds: false,
        criteria: 'RECIST',

        update: function () {
            if (this.stratum_var) {
                this.split = 'horizontal';
                this.splitFactor = 0.5;
            }

            return this;
        },
    };
}
