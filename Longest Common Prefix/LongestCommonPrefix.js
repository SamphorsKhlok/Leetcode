/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort(function(a,b){
        if(a.length > b.length){
            return 1;
        }else if (a.length < b.length){
            return -1;
        }

        return 0;
    });

    let temp = strs[0];

    let max = temp;
    let complete = false;

    for(let i = temp.length-1 ; i > 0 ; i--){
        for(let j = 1; j < strs.length ; j++){
            console.log(strs[j]);
            if(!temp.substr(0,i).indexOf(strs[j])){
                max = temp.substr(0,i-1) || "";
                break;
            }

            if(j == strs.length-1){
                complete = true;
            }
        }

        if(complete){
            break;
        }

    }
    //console.log(strs);
    //console.log(max);
    return max;

};

console.log(longestCommonPrefix(["a","a","b"]));

module.exports = { longestCommonPrefix }