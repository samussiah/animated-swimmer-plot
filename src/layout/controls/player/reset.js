import { fas } from '@fortawesome/free-solid-svg-icons';

export default function reset(form) {
    const button = this.util.addElement('button', form, 'button')
        .attr('type', 'button')
        .attr('title', 'Restart animation');
    const icon = fas.faRedo.icon;

    const path = this.util.addIcon.call(this, button, icon);

    button.on('click', () => {
        this.settings.timepoint = this.settings.timepointMin;
        console.log(this.settings.timepoint);
        // animation resets to initial timepoint
    });
}
