let assert = require('assert');
let { reverseWords} = require("./ReverseWords");

describe('fn revers words', ()=>{
  let tests = [
    {args:"Let's take LeetCode contest", expected:"s'teL ekat edoCteeL tsetnoc"}
  ];

  tests.forEach((test)=>{
    it("result",()=>{
      let result = reverseWords(test.args);
      assert.equal(result, test.expected);
    });
  });
});
