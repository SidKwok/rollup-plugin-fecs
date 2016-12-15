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
});
