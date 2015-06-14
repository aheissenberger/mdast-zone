'use strict';

/* eslint-env mocha */

function test(zone) {
    function onrun() {
        return [];
    }

    function plugin(mdast) {
        mdast.use(zone({
            'name': 'foo',
            'onrun': onrun
        }));
    }

    return plugin;
}

module.exports = test;
