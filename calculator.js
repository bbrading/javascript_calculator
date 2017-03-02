$(document).ready(function(){
  var firstNum = "";
  var secondNum = "";
  $(".button").on("click", clickEvent)

  function clickEvent(e){
    firstNum += e.currentTarget.id
    $("#screen").html(firstNum)
  }
})
