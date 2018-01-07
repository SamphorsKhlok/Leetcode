var assert = require('assert');
var {longestConsecutive} = require('./LongestConsecutiveSequence');

describe('longest Consecutive', function() {
    var tests = [
        {args: [100,4,200,1,3,2], expected: 4},
        {args: [1,2,3,4], expected: 4},
        {args: [1], expected: 1},
        {args: [], expected: 0},
        {args: [1,2,0,1], expected: 3},
        {args: [1,2], expected: 2},
    ];

    tests.forEach(function(test) {
        it('check result ' , function() {
            var res = longestConsecutive(test.args);
            assert.deepEqual(res, test.expected);
        });
    });
});
