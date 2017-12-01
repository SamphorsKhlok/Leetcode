var assert = require('assert');
var {normalize}=require('./PhoneNoNormalizer');

describe('function',function () {
    var tests =[
        {args: "4692353256", expected: true},
        {args: "+14692353256", expected: true},
        {args: "(469)235-3256", expected: true},
        {args: "+1(469)235-3256", expected: true},
        {args: "0692353256", expected: false},
        {args: "469235325896", expected: false},
    ];

    tests.forEach(function(test){
        it('check result', function(){
            var res = normalize(test.args);
            assert.equal(res, test.expected);
        });
    });
});