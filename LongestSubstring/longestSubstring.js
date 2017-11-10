// Given a string, find the length of the longest substring without repeating characters.
//
//     Examples:
//
// Given "abcabcbb", the answer is "abc", which the length is 3.
//
// Given "bbbbb", the answer is "b", with the length of 1.
//
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring,
// "pwke" is a subsequence and not a substring.
/**
 * @param {string} s
 * @return {number}
 */
//let str = "pwwkewabcde";
//let str = "aaaaaa";
//let str = "abcabcbb";
//let str = "dvdf";
module.exports = {
    lengthOfLongestSubstring
};

function lengthOfLongestSubstring(s) {
    let ch = s.split("");
    let temp = [];
    let max = 0;

    for(let i=0; i < ch.length ; i++){
        if(temp.indexOf(ch[i]) < 0 ){
            temp.push(ch[i]);
        }else{
            max = Math.max(temp.length, max);
            temp = temp.slice(temp.indexOf(ch[i])+1,temp.length);
            temp.push(ch[i]);
        }

        max = Math.max(temp.length, max);
    }
    //console.log(temp);
    //console.log(max);
    return max;
}

//console.log(lengthOfLongestSubstring(str));