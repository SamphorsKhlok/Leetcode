var assert = require('assert');
var {divide} = require('./Divide2Integers');

describe('addTwoNumbers', function() {
    var tests = [
        {args: [5,2], expected: 2},
        {args: [-1,1], expected: -1},
        {args: [-1,-1], expected: 1},
    ];

    tests.forEach(function(test) {
        it('check result ' , function() {
            var res = divide(test.args[0],test.args[1]);
            assert.deepEqual(res, test.expected);
        });
    });
});

