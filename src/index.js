import f from 'fecs';
import { createFilter } from 'rollup-pluginutils';
const Readable = require('stream').Readable;

export default function fecs(options = {}) {
    return {
        name: 'fecs',
        transform(code, id) {
            const stream = new Readable;
            stream.push(code);
            stream.push(null);
            const o = {
                stream
            };
            f.check(o, (success, errors) => {
                console.log(success, errors);
            });
        }
    }
};
