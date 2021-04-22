import { fas } from '@fortawesome/free-solid-svg-icons';

export default function speedDown(form) {
    const button = this.util.addElement('button', form, 'button')
        .attr('type', 'button')
        .attr('title', 'Decrease animation speed');
    const icon = fas.faChevronDown.icon;

    const path = this.util.addIcon.call(this, button, icon);

    button.on('click', () => {
        this.settings.speed+=this.settings.speedFactor;
        console.log(this.settings.speed);
        // animation continues at a slower pace
    });
}
