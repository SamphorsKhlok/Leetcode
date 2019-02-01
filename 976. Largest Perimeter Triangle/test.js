var assert = require('assert');
var {largestPerimeter} = require('./Largest Perimeter Triangle');

describe('Max perimeter', function() {
    var tests = [
        {args: [2,1,2], expected: 5},
        {args: [1,2,1], expected: 0},
        {args: [3,2,3,4], expected: 10},
        {args: [3,6,2,3], expected: 8},
        {args: [3,6], expected: 0},
        {args: [], expected: 0},
        {args: [1,2,2,4,18,8], expected: 5},
    ];

    tests.forEach(function(test) {
        it('check ' , function() {
            var res = largestPerimeter(test.args);
            assert.deepEqual(res, test.expected);
        });
    });
});
