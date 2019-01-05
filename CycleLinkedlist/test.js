var assert = require('assert');
var {hasCycle} = require('./CycleLinkedlist');

describe('convert to int', function() {
    var tests = [
        {args: [], expected: false},
        {args: [1,2], expected: false},

    ];

    tests.forEach(function(test) {
        it('check result ' , function() {
            var res = hasCycle(test.args);
            assert.deepEqual(res, test.expected);
        });
    });
});
