var assert = require('assert');
var {lengthOfLongestSubstring} = require('./longestSubstring');

describe('function', function() {
    var tests = [
        {args: "pwwkewabcde",   expected: 7},
        {args: "aaaaaa",        expected: 1},
        {args: "abcabcbb",      expected: 3},
        {args: "dvdf",          expected: 3}
    ];

    tests.forEach(function(test) {
        it('check result', function() {
            var res = lengthOfLongestSubstring(test.args);
            assert.equal(res, test.expected);
        });
    });
});