import { faRedo } from '@fortawesome/free-solid-svg-icons';
import updateTimepoint from './updateTimepoint';
import { runAnimation } from '../../../init';
import { transitionAnimation } from '../../../init';

export default function reset(form) {
    const button = this.util
        .addElement('button', form, 'button')
        .attr('type', 'button')
        .attr('title', 'Restart animation');
    const path = this.util.addIcon.call(this, button, faRedo.icon);

    // TODO: make reset work
    button.on('click', () => {
        console.log('reset');
        // Break animation loop on reset.
        this.break = true;

        d3.timeout(() => {
            updateTimepoint.call(this, this.settings.timepointMin); // TODO: disable button at maximum timepoint
            this.plots.forEach((plot) => {
                transitionAnimation.call(this, plot);
            });

            if (this.settings.play) runAnimation.call(this);
        }, this.settings.duration);
    });

    return button;
}
