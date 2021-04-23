import set from './init/set';
import scale from './init/scale';
import axis from './init/axis';

export default function init() {
    this.set = set.call(this);
    this.settings.barSize = this.settings.dimensions.height / this.set.id.size;
    this.scale = scale.call(this);
    this.axis = axis.call(this);
}
