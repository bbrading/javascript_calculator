$(document).ready(function(){
  var firstNum = "";
  var secondNum = "";
  $(".button").on("click", clickEvent)
  //$("#.add").on("click", add)

  function clickEvent(e){
    if (firstNum == ""){
      firstNum += e.currentTarget.id
      $("#screen").html(firstNum)
    }
    else {
      secondNum += e.currentTarget.id
      $("#screen").html(secondNum)
    }

  }

  /*function add(){
    var sum = parseInt(firstNum, 10) + parseInt(secondNum, 10)
    $("screen").html(sum)
  }*/

})
