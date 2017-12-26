$(document).ready(function(){
  $('#btn5').click(rotateFn);

  function rotateFn(){
    console.log("start to rotate");
    var items = document.getElementsByClassName('buttonClass');
    var values = [];

    for(var i=0; i < 9 ; i++){
      values[i] = items[i].innerHTML;
    }

    //first row
    items[1].innerHTML = values[0];
    items[2].innerHTML = values[1];
    items[5].innerHTML = values[2];

    //middle
    items[5].innerHTML = values[2];

    //last row
    items[8].innerHTML = values[5];
    items[7].innerHTML = values[8];
    items[6].innerHTML = values[7];

    //middle
    items[3].innerHTML = values[6];
    items[0].innerHTML = values[3];

    //console.log(values);
  }
});
