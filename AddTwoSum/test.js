var assert = require('assert');
var {ListNode, addTwoNumbers} = require('./AddTwoSum');

describe('addTwoNumbers', function() {
    var tests = [
        {args: [[5,4,3],[5]], expected: [0,5,3]},
        {args: [[5,4,3],[5]], expected: [0,5,3]},
        {args: [[5,4,3],[5]], expected: [0,5,3]},
    ];

    tests.forEach(function(test) {
        it('check result ' , function() {
            let l1 = initListNode(test.args[0]);
            let l2 = initListNode(test.args[1]);
            var res = addTwoNumbers(l1,l2);
            assert.deepEqual(res, test.expected);
        });
    });
});

let initListNode = function(arr){
    let l = new ListNode(null);
    while(arr.length > 0){
        l.add(arr.shift());
    }

    return l;
};