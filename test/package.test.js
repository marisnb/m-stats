/* global describe, it */

'use strict';

const assert = require('assert');
const fs     = require('fs');
const path   = require('path');
const pkg    = require('../package.json');

describe('package.json', function () {
    it('defines an existing primary entry point', function () {
        assert(function () {
            return pkg.main === 'lib/stats.js';
        });

        assert(function () {
            return fs.existsSync(path.join(__dirname, '..', pkg.main));
        });
    });
});
