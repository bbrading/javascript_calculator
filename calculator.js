$(document).ready(function(){
  var firstNum = "";
  var secondNum = "";
  $(".button").on("click", clickEvent)
  $("#screen").html(firstNum)

  function clickEvent(){
    firstNum += event.currentTarget.value
    $("#screen").html(firstNum)
  }
})
