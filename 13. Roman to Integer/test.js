var assert = require('assert');
var {romanToInt} = require('./RomanToInteger');

describe('convert to int', function() {
    var tests = [
        {args: "DCXXI", expected: 621},
    ];

    tests.forEach(function(test) {
        it('check result ' , function() {
            var res = romanToInt(test.args);
            assert.deepEqual(res, test.expected);
        });
    });
});
