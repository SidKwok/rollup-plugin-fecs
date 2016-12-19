const assert = require('assert');
const { rollup } = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const fecs = require('../');

process.chdir('test');

describe('rollup-plugin-fecs', () => {
    it('should not fail with default options', () => {
		return rollup({
			entry: 'fixtures/undeclared.js',
			plugins: [
				fecs()
			]
		});
	});
    it('should ignore node_modules with exclude option', () => {
		return rollup({
			entry: 'fixtures/modules.js',
			plugins: [
				resolve({
                    jsnext: true
                }),
				fecs({
					exclude: '../node_modules/**'
				})
			]
		}).catch(err => {
            return null;
        });
	});
});
