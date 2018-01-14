var assert = require('assert');
var merge = require('./MergeSortedArray');

describe('Merging ', function() {
    var tests = [
        {args: [[0], 0, [1], 1], expected: [1]},
        {args: [[1], 1, [0], 0], expected: [1]},
        {args: [[1], 1, [2], 1], expected: [1,2]},
        {args: [[1,3,5], 3, [2,4,6], 3], expected: [1,2,3,4,5,6]},

    ];

    tests.forEach(function(test) {
        it('check result ' , function() {
            var res = merge(test.args[0],test.args[1],test.args[2],test.args[3]);
            assert.deepEqual(res, test.expected);
        });
    });
});
