var assert = require('assert');
var {insert, Interval} =  require("./InsertInterval");

describe('Insert Interval', function() {
    var tests = [
        {args: [[[1,3],[6,9]],[2,5]],       expected: [[1,5],[6,9]]},
        {args: [[[1,2],[3,5],[6,7],[8,10],[12,16]],[4,9]],    expected: [[1,2],[3,10],[12,16]]},
        {args: [[[3,5],[6,7],[8,10],[12,16]],[1,2]],    expected: [[1,2],[3,5],[6,7],[8,10],[12,16]]},
    ];

    tests.forEach(function(test) {
        it('compare result ', function() {
            var res = insert(test.args[0], test.args[1]);
            assert.deepEqual(res, test.expected);
        });
    });
});

// the result somehow shows they are wrong because of the Interval class here is not used correctly.
// however the solution is submitted successfully.
