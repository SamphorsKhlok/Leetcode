let assert = require('assert');
let {removeElement} = require('./RemoveElement');

describe('fn remove element', ()=>{
  let tests = [
    {args:[[3,2,2,3],3], expected: 2},
  ];

  tests.forEach((test)=>{
    it('result', ()=>{
      let result = removeElement(test.args[0],test.args[1]);
      assert.equal(result, test.expected);
    });
  })
});
