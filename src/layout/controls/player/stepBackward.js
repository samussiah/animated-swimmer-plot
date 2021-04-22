import { fas } from '@fortawesome/free-solid-svg-icons';

export default function stepBackward(form) {
    const button = this.util.addElement('button', form, 'button')
        .attr('type', 'button')
        .attr('title', 'Step backward one timepoint');
    const icon = fas.faStepBackward.icon;

    const path = this.util.addIcon.call(this, button, icon);

    button.on('click', () => {
        this.settings.timepoint--; // TODO: disable button at minimum timepoint
        console.log(this.settings.timepoint);
        // pause animation and proceed to previous timepoint
    });
}
