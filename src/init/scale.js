import x from './scale/x';
import y from './scale/y';
import color from './scale/color';

export default function scale() {
    return {
        x: x.call(this, [this.settings.margin.left, this.settings.width - this.settings.margin.right]),
        y: y.call(this, this.set.id),
        color: color.call(this),
    };
}
