import data from './view/data';
import { transitionAnimation } from '../../init';

export default function view(controls) {
    const container = this.util.addElement('view', controls);
    const form = this.util.addElement('view__form', container, 'form');
    form.append('span').text('View');
    const inputs = this.util
        .addElement('div', form)
        .selectAll('input')
        .data(data)
        .join('input')
        .attr('type', 'radio')
        .attr('name', 'view')
        .attr('value', (d) => d.value)
        .property('checked', (d) => d.setting === this.settings.view)
        .each(function (d) {
            const label = document.createElement('label');
            label.textContent = d.label;
            this.parentNode.insertBefore(label, this);
        });

    // TODO: handle rank calculation for strata
    inputs.on('change', () => {
        const d = form.selectAll('input:checked').datum();
        console.log(`view: ${d.setting}`);

        this.settings.view = d.setting;

        // Re-calculate x-domain.
        const allStates = this.data.interpolated.flatMap((d) => d[`states${this.settings.view}`]);
        const x1 = d3.min(allStates, (d) => d.start_timepoint);
        const x2 = d3.max(allStates, (d) => d.start_timepoint + d.duration);
        this.xDomain = [x1, x2];

        this.plots.forEach((plot) => {
            plot.data.timepoints.forEach(([timepoint, data]) => {
                // Define mutable rank given current view.
                data.sort(
                    (a, b) => a[`rank${this.settings.view}`] - b[`rank${this.settings.view}`]
                );

                data.forEach((d, i) => {
                    d[`rank${plot.stratum}`] = i;
                });
            });
        });

        if (this.settings.play === false)
            this.plots.forEach((plot) => {
                transitionAnimation.call(this, plot);
            });
    });

    return inputs;
}
