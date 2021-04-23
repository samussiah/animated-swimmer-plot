import x from './scale/x';
import y from './scale/y';
import color from './scale/color';

export default function scale() {
    return {
        x: x.call(this),
        y: y.call(this),
        color: color.call(this),
    };
}
