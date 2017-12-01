// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.
//
//     The matching should cover the entire input string (not partial).
//
// The function prototype should be:
//     bool isMatch(const char *s, const char *p)
//
// Some examples:
// isMatch("aa","a") → false
// isMatch("aa","aa") → true
// isMatch("aaa","aa") → false
// isMatch("aa", "a*") → true
// isMatch("aa", ".*") → true
// isMatch("ab", ".*") → true
// isMatch("aab", "c*a*b") → true

function isMatch (chars, exp){
    let charsArr = chars.split('');
    let expArr = exp.split('');

    for(let i = 0; i < charsArr.length ; i++){

        console.log(charsArr[i] + " - " + expArr[i]);
        if(
            (charsArr[i] != expArr[i] && expArr[i] != "." && expArr[i] != "*")
        ){

            return false;
        }else if(expArr[i] == "*") {
                break;
        }
    }

    return true;

}

console.log(isMatch("aa", "a*"));

module.exports = {
    isMatch
};