var assert = require('assert');
var {} =  require("./");

function add() {
    return Array.prototype.slice.call(arguments).reduce(function(prev, curr) {
        return prev + curr;
    }, 0);
}

describe('add()', function() {
    var tests = [
        {args: [1, 2],       expected: 4},
        {args: [1, 2, 3],    expected: 6},
        {args: [1, 2, 3, 4], expected: 10}
    ];

    tests.forEach(function(test) {
        it('compare result ', function() {
            var res = add.apply(null, test.args);
            assert.equal(res, test.expected);
        });
    });
});