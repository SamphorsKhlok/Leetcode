let assert = require('assert');
let { reverseWords} = require("./ReverseWords");

describe('fn revers words', ()=>{
  let tests = [
    {args:["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"], expected:["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]}
  ];

  tests.forEach((test)=>{
    it("result",()=>{
      reverseWords(test.args);
      assert.deepEqual(test.args, test.expected);
    });
  });
});
