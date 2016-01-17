'use strict';

/* eslint-env node, mocha */

var assert = require('assert');

function test(zone) {
    function onrun(result) {
        it('should not `onrun` with markers when transforming', function () {
            assert(result.type !== 'marker');
        });
    }

    function plugin(remark) {
        remark.use(zone({
            'name': 'foo',
            'onrun': onrun
        }));
    }

    return plugin;
}

module.exports = test;
