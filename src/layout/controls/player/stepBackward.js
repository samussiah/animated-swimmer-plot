import { faStepBackward } from '@fortawesome/free-solid-svg-icons';
import toggle from './playPause/toggle';
import updateTimepoint from './updateTimepoint';
import { transitionAnimation } from '../../../init';

export default function stepBackward(form) {
    const button = this.util
        .addElement('button', form, 'button')
        .attr('type', 'button')
        .attr('title', 'Step backward one timepoint');
    const path = this.util.addIcon.call(this, button, faStepBackward.icon);

    // TODO: disable buttoon at minimum timepoint
    button.on('click', () => {
        this.break = true;

        if (this.settings.play) toggle.call(this);

        d3.timeout(() => {
            updateTimepoint.call(this, this.settings.timepoint - 1);
            this.plots.forEach((plot) => {
                transitionAnimation.call(this, plot);
            });
        }, this.settings.duration);
    });

    return button;
}
