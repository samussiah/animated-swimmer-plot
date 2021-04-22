import { fas } from '@fortawesome/free-solid-svg-icons';

export default function stepForward(form) {
    const button = this.util.addElement('button', form, 'button')
        .attr('type', 'button')
        .attr('title', 'Step forward one timepoint');
    const icon = fas.faStepForward.icon;

    const path = this.util.addIcon.call(this, button, icon);

    button.on('click', () => {
        this.settings.timepoint++; // TODO: disable button at maximum timepoint
        console.log(this.settings.timepoint);
        // pause animation and proceed to next timepoint
    });
}
