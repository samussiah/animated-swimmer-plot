import util from './util/index';
import settings from './settings';
import layout from './layout';
import data from './data';
import controls from './controls';
import init from './init';

export default function animatedSwimmerPlot(_data_, _element_ = 'body', _settings_ = {}) {
    const fdg = {
        element: _element_,
        settings: Object.assign(settings(), _settings_),
        util
    };

    fdg.layout = layout.call(fdg);
    fdg.data = data.call(fdg, _data_);
    fdg.controls = controls.call(fdg);

    init.call(fdg);

    return fdg;
}
