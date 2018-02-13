let assert = require('assert');
let {maxProfit} = require('./BestTimeToSellStock');

describe('fn max profit', ()=>{
  let tests = [
    { args: [7, 1, 5, 3, 6, 4], expected:5 },
    { args: [7, 6, 4, 3, 1], expected:0 },
    ];

  tests.forEach((test) =>{
    it("result", ()=>{
      let result = maxProfit(test.args);
      assert.equal(result, test.expected);
    })
  });
});
