var assert = require('assert');
var { islandPerimeter } = require('./islandPerimeter');

describe("function ", () =>{
    let tests = [
      {
        args: [
          [1,1],
          [0,0]
        ],
        expected: "6"
      },
      {
        args: [
          [0,1,0,0],
          [1,1,1,0],
          [0,1,0,0],
          [1,1,0,0]
          ],
        expected: "16"
      },
      {
        args: [
          [1,1,1,1],
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0]
        ],
        expected: "10"
      },
      {
        args: [
          [1,1],
          [1,1]
        ],
        expected: "8"
      },
      {
        args: [
          [1,0],
          [0,0]
        ],
        expected: "4"
      }
    ];

    tests.forEach((test)=>{
        it('result',()=>{
            let res = islandPerimeter(test.args);
            assert.deepEqual(res, test.expected);
        });
    });
});
