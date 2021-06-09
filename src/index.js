import util from './util/index';
import settings from './settings';
import layout from './layout';
import data from './data';
import controls from './controls';
import init from './init';

export default function animatedSwimmerPlot(_data_, _element_ = 'body', _settings_ = {}) {
    const fdg = {
        element: _element_,
        settings: Object.assign(settings(), _settings_).update(),
        util,
    };

    fdg.layout = layout.call(fdg); // DOM manipulation
    fdg.data = data.call(fdg, _data_); // data manipulation
    fdg.controls = controls.call(fdg); // update controls

    init.call(fdg); // initialize display

    return fdg;
}
