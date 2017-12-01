var assert = require('assert');
var {isMatch} =  require("./RegularExpressionMatching");

describe('isMatch', function() {
    var tests = [
        {args: ["aa","a"],      expected: false},
        {args: ["aa","aa"],     expected: true},
        {args: ["aaa","aa"],    expected: false},
        {args: ["aa","a*"],     expected: true},
        {args: ["aa","*"],      expected: true},
        {args: ["ab","*"],      expected: true},
        {args: ["aab","c*a*b"], expected: true},
    ];

    tests.forEach(function(test) {
        it('compare result ', function() {
            var res = isMatch(test.args[0],test.args[1]);
            assert.equal(res, test.expected);
        });
    });
});