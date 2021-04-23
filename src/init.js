import set from './init/set';
import scale from './init/scale';

export default function init() {
    this.set = set.call(this);
    this.settings.barSize = this.settings.dimensions.height / this.set.id.size;
    this.scale = scale.call(this);
}
