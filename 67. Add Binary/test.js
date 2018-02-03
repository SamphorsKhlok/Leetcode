var assert = require('assert');
var { addBinary } = require('./AddBinary');

describe("function ", () =>{
    let tests = [
      {args: ["0","0"], expected: "0" },
      {args: ["1001","1001"], expected: "10010" },
      {args: ["10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
          "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"],
        expected: "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000" },
    ];

    tests.forEach((test)=>{
        it('result',()=>{
            let res = addBinary(test.args[0],test.args[1]);
            assert.deepEqual(res, test.expected);
        });
    });
});
