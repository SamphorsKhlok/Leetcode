var assert = require('assert');
var { numIslands } = require('./NumberOfIslands');

describe("function ", () =>{
    let tests = [
      {
        args: [
            ["1","1","1","1","0"],
            ["1","1","0","1","0"],
            ["1","1","0","0","0"],
            ["0","0","0","0","0"]
          ],
        expected: "1"
      },
      {
        args: [
          ["1","1","0","1","0"],
          ["1","1","0","1","0"],
          ["1","1","0","0","0"],
          ["0","0","0","0","0"]
        ],
        expected: "2"
      },
      {
        args: [
          ["1","1","0","0","0"],
          ["1","1","0","0","0"],
          ["0","0","1","0","0"],
          ["0","0","0","1","1"]
        ],
        expected: "3"
      },
      {
        args: [
          ["1","1","0","0","0"],
          ["1","1","0","0","0"],
          ["0","0","1","0","0"],
          ["0","0","0","1","1"]
        ],
        expected: "3"
      }
    ];

    tests.forEach((test)=>{
        it('result',()=>{
            let res = numIslands(test.args);
            assert.deepEqual(res, test.expected);
        });
    });
});
