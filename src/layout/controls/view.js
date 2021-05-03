import data from './view/data';

export default function view(controls) {
    const container = this.util.addElement('view', controls);
    const form = this.util.addElement('view__form', container, 'form');
    form.append('span').text('View');
    const inputs = this.util.addElement('div', form)
        .selectAll('input')
        .data(data)
        .join('input')
        .attr('type', 'radio')
        .attr('name', 'view')
        .attr('value', d => d.value)
        .property('checked', d => d.setting === this.settings.view)
        .each(function(d) {
            const label = document.createElement('label');
            label.textContent = d.label;
            this.parentNode.insertBefore(label, this);
        });

    inputs.on('change', () => {
        const d = form.selectAll('input:checked').datum();
        this.settings.view = d.setting;
    });

    return inputs;
}
