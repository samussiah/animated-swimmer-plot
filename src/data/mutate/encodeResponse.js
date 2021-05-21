export default function encodeResponse(datum) {
    // response order
    if (datum[this.settings.result_order_var] !== undefined)
        datum.result_order = datum[this.settings.result_order_var];
    else {
        switch(datum.result.toLowerCase()) {
            // Complete Response
            case 'cr': datum.result_order = 0; break;
            case 'complete response': datum.result_order = 0; break;
            case 'complete response (cr)': datum.result_order = 0; break;

            // Partial Response
            case 'pr': datum.result_order = 1; break;
            case 'partial response': datum.result_order = 1; break;
            case 'partial response (pr)': datum.result_order = 1; break;

            // Stable Disease
            case 'sd': datum.result_order = 2; break;
            case 'stable disease': datum.result_order = 2; break;
            case 'stable disease (sd)': datum.result_order = 2; break;

            // Non-Progressive Disease
            case 'non-pd': datum.result_order = 2; break;
            case 'non-progressive disease': datum.result_order = 2; break;

            // Non-CR/Non-PD
            case 'non-cr/non-pd': datum.result_order = 3; break;
            case 'non-complete reponse/non-progressive disease': datum.result_order = 3; break;

            // Not Evaluated
            case 'ne': datum.result_order = 4; break;
            case 'not evaluated': datum.result_order = 4; break;
            case 'not evaluated (ne)': datum.result_order = 4; break;
            case 'not all evaluated': datum.result_order = 4; break;
            case 'not all evaluated (ne)': datum.result_order = 4; break;

            // Unknown / Undefined
            case 'un': datum.result_order = 5; break;
            case 'unknown': datum.result_order = 5; break;
            case 'unknown (un)': datum.result_order = 5; break;
            case 'undefined': datum.result_order = 5; break;
            case 'undefined (un)': datum.result_order = 5; break;

            // Unconfirmed Progressive Disease
            case 'pdu': datum.result_order = 6; break;
            case 'unconfirmed progressive disease': datum.result_order = 6; break;

            // Progressive Disease
            case 'pd': datum.result_order = 7; break;
            case 'progressive disease': datum.result_order = 7; break;
            case 'progressive disease (pd)': datum.result_order = 7; break;

            // Confirmed Progressive Disease
            case 'pdc': datum.result_order = 7; break;
            case 'confirmed progressive disease': datum.result_order = 7; break;

            default: datum.result_order = -1; break;
        }
    }

    // color
    datum.result_color =
        datum[this.settings.result_color_var] !== undefined
            ? datum[this.settings.result_color_var]
            : datum.result === 'CR'
            ? '#2166ac'
            : datum.result === 'PR'
            ? '#4393c3'
            : datum.result === 'SD'
            ? '#92c5de'
            : datum.result === 'NE'
            ? '#969696'
            : datum.result === 'UN'
            ? '#bdbdbd'
            : datum.result === 'PD'
            ? '#d6604d'
            : null;
}
