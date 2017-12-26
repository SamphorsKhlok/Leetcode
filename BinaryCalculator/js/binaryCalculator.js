$(document).ready(function(){
  var resultEle = document.getElementsByClassName('res')[0];
  var result = "";
  var operand1 = "";
  var operand2 = "";
  var operation ="";
  $('#btn0').click(ZeroClick);
  $('#btn1').click(OneClick);

  $('#btnClr').click(ClrClick);
  $('#btnEql').click(EqlClick);

  $('#btnSum').click(SumClick);
  $('#btnSub').click(SubClick);
  $('#btnMul').click(MulClick);
  $('#btnDiv').click(DivClick);

  function ClrClick(){
    console.log("Clr is clicked");
    result = "";
    resultEle.innerHTML = result;
  }

  function EqlClick(){
    console.log("Eql is clicked");
    result = calculate(result,operation);

    resultEle.innerHTML = result;
  }

  function ZeroClick(){
    console.log("0 is clicked");
    result += 0;
    resultEle.innerHTML = result;
  }

  function OneClick(){
    console.log("1 is clicked");
    result += 1;
    resultEle.innerHTML = result;
  }

  function SumClick(){
    console.log("+ is clicked");
    operation = "+";
    result += "+";
    resultEle.innerHTML = result;
  }

  function SubClick(){
    console.log("- is clicked");
    operation = "-";
    result += "-";
    resultEle.innerHTML = result;
  }

  function MulClick(){
    console.log("* is clicked");
    operation = "*";
    result += "*";
    resultEle.innerHTML = result;
  }

  function DivClick(){
    console.log("/ is clicked");
    operation = "/";
    result += "/";
    resultEle.innerHTML = result;
  }

  function calculate(result, operation){
    var result;
    switch(operation){
      case '+':
        var temp  = result.split("\+");
        operand1 = temp[0];
        operand2 = temp[1];
        console.log(operand1 + " -- "+ operand2);
        result = bin2Dec(operand1) + bin2Dec(operand2);
        break;
      case '-':
        var temp  = result.split("\-");
        operand1 = temp[0];
        operand2 = temp[1];
        console.log(operand1 + " -- "+ operand2);
        result = bin2Dec(operand1) - bin2Dec(operand2);
        break;
      case '*':
        var temp  = result.split("\*");
        operand1 = temp[0];
        operand2 = temp[1];
        console.log(operand1 + " -- "+ operand2);
        result = bin2Dec(operand1)*bin2Dec(operand2);
        break;
      case '/':
        var temp  = result.split("/");
        operand1 = temp[0];
        operand2 = temp[1];
        console.log(operand1 + " -- "+ operand2);
        result = bin2Dec(operand1)/bin2Dec(operand2);

        break;
      default:
        console.log("no operation match");
    }

    return dec2Bin(result);
  }

  function bin2Dec(b){
    return parseInt(b,2).toString(10);
  }

  function dec2Bin(d){
    return (d >>> 0).toString(2);
  }
});
