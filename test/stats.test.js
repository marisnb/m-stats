/* global describe, it */

'use strict';

const assert     = require('assert');
const stats      = require('../lib/stats');
// const describe = require("mocha");

describe('stats', function () {

    describe('.sum()', function () {
        it('returns the sum of the given numerical data', function () {
            assert.strictEqual(stats.sum([]), 0);
            assert.strictEqual(stats.sum([-1]), -1);
            assert.strictEqual(stats.sum([-1, 3, 5, -1]), 6);
            assert.strictEqual(stats.sum([-1, 3, 5, 7, 5, 5, 7]), 31);
            assert.strictEqual(stats.sum([-1, 7, 3, 5, 4, 4, 4, 3, -1]), 28);
        });
    });

    describe('.mode()', function () {
        it('returns the mode of the given numerical data', function () {
            assert.ok(isNaN(stats.mode([])));
            assert.strictEqual(stats.mode([-1]), -1);
            assert.strictEqual(stats.mode([-1, 3, 5, -1]), -1);
            assert.strictEqual(stats.mode([-1, 3, 5, 7, 5, 5, 7]), 5);
            assert.strictEqual(stats.mode([-1, 7, 3, 5, 4, 4, 4, 3, -1, 3]), 3);
        });
    });

    describe('.range()', function () {
        it('returns the range of the given numerical data', function () {
            assert.ok(isNaN(stats.range([])));
            assert.strictEqual(stats.range([-1]), -1);
            assert.strictEqual(stats.range([-1, 3, 5, -2]), 7);
            assert.strictEqual(stats.range([-1, 3, 5, 7, 5, 5, -7]), 14);
            assert.notStrictEqual(stats.range([-1, 3, 5, 7, 5, 5, -7]), 11);
            assert.strictEqual(stats.range([-1, 7, 3, 5, 4, 4, 4, 3, -1, 3]), 8);
        });
    });

    describe('.mean()', function () {
        it('returns the mean of the given numerical data', function () {
           assert.ok(isNaN(stats.mean([])));
            assert.strictEqual(stats.mean([-1]), -1);
            assert.strictEqual(stats.mean([-1, 2, 3, 4, 4]), 2.4);
            assert.strictEqual(stats.mean([-1, 2.5, 3.25, 5.75]), 2.625);
        });
    });

    describe('.median()', function () {
        it('returns the median of the given numerical data', function () {
            assert.ok(isNaN(stats.median([])));
            assert.strictEqual(stats.median([-1]), -1);
            assert.strictEqual(stats.median([-1, 3, 5]), 3);
            assert.strictEqual(stats.median([-1, 3, 5, 7]), 4);
            assert.strictEqual(stats.median([-1, 7, 3, 5, 4]), 4);
        });
    });

    describe('.min()', function () {
        it('returns the sum of the given numerical data', function () {
            assert.strictEqual(stats.min([]), 0);
            assert.strictEqual(stats.min([-1]), -1);
            assert.strictEqual(stats.min([-1, 3, 5, -1]), -1);
            assert.strictEqual(stats.min([-1, 3, 5, 7, 5, 5, -2]), -2);
            assert.strictEqual(stats.min([0, 7, 3, 5, 4, 4, 4, 3, 32]), 0);
        });
    });

    describe('.max()', function () {
        it('returns the sum of the given numerical data', function () {
            assert.strictEqual(stats.max([]), 0);
            assert.strictEqual(stats.max([-1]), -1);
            assert.strictEqual(stats.max([-1, 3, 5, -1]), 5);
            assert.strictEqual(stats.max([-1, 3, 5, 7, 5, 5, -2]), 7);
            assert.strictEqual(stats.max([0, 7, 3, 5, 4, 4, 4, 3, 32]), 32);
        });
    });

    describe('.avg()', function () {
        it('returns the sum of the given numerical data', function () {
            assert.ok(isNaN(stats.avg([])));
            assert.strictEqual(stats.avg([-1]), -1);
            assert.strictEqual(Number(stats.avg([-1, 3, 5, -1]).toFixed(2)), 1.5);
            assert.strictEqual(Number(stats.avg([-1, 3, 5, 7, 5, 5, -2]).toFixed(2)), 3.14);
            assert.strictEqual(Number(stats.avg([0, 7, 3, 5, 4, 4, 4, 3, 32]).toFixed(2)), 6.89);
        });
    });
});
