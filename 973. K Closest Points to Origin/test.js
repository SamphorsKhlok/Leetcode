var assert = require('assert');
var {kClosest} = require('./K closest point');

describe('K closest', function() {
    var tests = [
        {args: [[[1,3],[-2,2]],1], expected: [[-2,2]]},
        {args: [[[3,3],[5,-1],[-2,4]],2], expected: [[3,3],[-2,4]]},
        {args: [[[3,3]],1], expected: [[3,3]]},
        {args: [[],1], expected: []},
    ];

    tests.forEach(function(test) {
        it('check ' , function() {
            var res = kClosest(test.args[0],test.args[1]);
            assert.deepEqual(res, test.expected);
        });
    });
});
