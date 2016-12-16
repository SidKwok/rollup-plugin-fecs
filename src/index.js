import f from 'fecs';
import { createFilter } from 'rollup-pluginutils';

export default function fecs(options = {}) {
    let cb = options.cb;
    if (typeof cb !== 'function') {
        cb = () => null;
    }
    var filter = createFilter(options.include, options.exclude || 'node_modules/**');
    return {
        name: 'fecs',
        transform(code, id) {
            if (!filter(id)) return null;
            let _options = Object.assign(options, f.getOptions());
            _options._[0] = id;
            f.check(_options, success => {
                if (success) {
                    cb();
                }
            });
        }
    }
};
