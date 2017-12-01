const validate = function (str){

    //check pattern
    //us number only
    var pattern = /^[1-9][0-9]{9}/
    //US normalized number
    var pattern1 = /^\+1[0-9]{9}/
    //check length
    if (str.length !== 10) {
        console.log("length "+ str)
        return false
    }
    //check regex
    else if (!(pattern.test(str) ||pattern1.test(str)) ){
        console.log("didn't match  "+ str)
        return false;
    }
    return true;

}

const normalize = function (number){
    if (validate(number)){
        return true;
    }
    return false;
}

module.exports = {normalize}


