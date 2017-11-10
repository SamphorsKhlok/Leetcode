//Determine whether an integer is a palindrome. Do this without extra space.
var isPalindrome = function(x) {
    if(x < 0){
        return false;
    }

    let temp = [];
    let v = Math.abs(x);

    while(v>0){
        temp.push(v%10);
        v = Math.floor(v/10);
    }

    let len = temp.length;

    if(len%2){
        return isReflective(temp.slice(0, len/2) , temp.slice((len/2)+1, len));
    }else{
        return isReflective (temp.slice(0, len/2) , temp.slice(len/2, len) );
    }
};

var isReflective = function(a1,a2){
    console.log(a1);
    console.log(a2);
    while(a1.length > 0){
        if( a1.pop() != a2.shift()){
            return false;
        }
    }

    return true;
}

console.log(isPalindrome(11311));