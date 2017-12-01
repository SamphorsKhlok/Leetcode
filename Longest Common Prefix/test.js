var assert = require('assert');
var { longestCommonPrefix } =  require("./LongestCommonPrefix");

describe('add()', function() {
    var tests = [
        {args: ["a","a","b"],   expected: ""},
        {args: ["a", "a"],      expected: "a"},
        {args: ["abca", "abc"], expected: "abc"},
        {args: ["ac", "ac", "a", "a"], expected: "a"}
    ];

    tests.forEach(function(test) {
        it('compare result ', function() {
            var res = longestCommonPrefix(test.args);
            assert.equal(res, test.expected);
        });
    });
});