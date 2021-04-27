import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import updateSpeed from './updateSpeed';

export default function speedUp(form) {
    const button = this.util
        .addElement('button', form, 'button')
        .attr('type', 'button')
        .attr('title', 'Increase animation speed');
    const path = this.util.addIcon.call(this, button, faChevronUp.icon);

    button.on('click', () => {
        this.settings.speed =
            this.settings.speed > this.settings.speedFactor
                ? this.settings.speed - this.settings.speedFactor
                : this.settings.speed; // TODO: disable button at minimum speed
        console.log(this.settings.speed);
        // animation continues at a quicker pace
    });

    return button;
}
