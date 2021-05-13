import getDimensions from './layout/getDimensions';
import layoutControls from './layout/controls';
import layoutCanvas from './layout/canvas';
import resize from './layout/resize';

export default function layout() {
    const main = this.util.addElement('main', d3.select(this.element));
    const dimensions = getDimensions.call(this, main);
    this.settings.width = dimensions.width;
    this.settings.height = dimensions.height;
    const legend = this.util.addElement('legend', main);
    const plots = this.util.addElement('plots', main);
    const controls = layoutControls.call(this, main);

    window.addEventListener('resize', resize.bind(this));

    return {
        main,
        legend,
        plots,
        ...controls,
    };
}
