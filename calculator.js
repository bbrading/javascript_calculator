$(document).ready(function(){
  var firstNum = "";
  var secondNum = "0";
  var currentNum = "";
  var answer = "";

  $(".button").on("click", clickEvent)
  $("#add").on("click", add)
  $("")
  $("#equals").on("click", displayAnswer)

  function clickEvent(e){
    if (firstNum === ""){
      currentNum += e.currentTarget.id
      $("#screen").html(currentNum)
    }
    else {
      secondNum += e.currentTarget.id
      $("#screen").html(secondNum)
    }
  }

  function add(){
    if(firstNum === ""){
      firstNum = parseInt(currentNum, 10);
      answer = (parseInt(firstNum, 10) + parseInt(secondNum, 10)) || parseInt(firstNum, 10)
      $("#screen").html(answer)
      firstNum = answer
      secondNum = 0;
    }
    else{
    answer = (parseInt(firstNum, 10) + parseInt(secondNum, 10)) || parseInt(firstNum, 10)
    $("#screen").html(answer)
    firstNum = answer
    secondNum = 0;
    }
  }

  function subtract(){
    if(firstNum === ""){
      firstNum = parseInt(currentNum, 10);
      answer = (parseInt(firstNum, 10) - parseInt(secondNum, 10)) || parseInt(firstNum, 10)
      $("#screen").html(answer)
      firstNum = answer
      secondNum = 0;
    }
    else{
    answer = (parseInt(firstNum, 10) - parseInt(secondNum, 10)) || parseInt(firstNum, 10)
    $("#screen").html(answer)
    firstNum = answer
    secondNum = 0;
    }
  }

  function displayAnswer(){
    $("#screen").html(answer)
  }

  function clear(){

  }

})
