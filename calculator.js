$(document).ready(function(){
  var firstNum = "";
  var nextNum = "";
  var currentNum = "";
  var currentOperator = "";

  $(".button").on("click", clickEvent)
  $("#add").on("click", addOperator)
  $("#subtract").on("click", subtractOperator)
  $("#equals").on("click", calculateAnswer)

  function clickEvent(e){
    if (currentNum === ""){
      firstNum += e.currentTarget.id
      $("#screen").html(firstNum)
    }
    else {
      nextNum += e.currentTarget.id
      $("#screen").html(nextNum)
    }
  }

  function addOperator(e){
    if (currentOperator !== ""){
      calculateAnswer()
    }
    currentOperator = add
    if (currentNum == ""){
      currentNum = firstNum
    }
  }

  function subtractOperator(e){
    if (currentOperator !== ""){
      calculateAnswer()
    }
    currentOperator = subtract
    if (currentNum == ""){
      currentNum = firstNum
    }
  }

  function add(){
    currentNum = parseInt(currentNum, 10) + parseInt(nextNum, 10)
    nextNum = ""
    return currentNum
  }

  function subtract(){
    currentNum = parseInt(currentNum, 10) - parseInt(nextNum, 10)
    nextNum = ""
    return currentNum
  }

  function calculateAnswer(){
    var answer = currentOperator()
    $("#screen").html(answer)
  }


  function clear(){

  }

})


// -- in test file --
// var assert = require('assert');
// describe('add', function() {
//   it('should add the currentNum and nextNum', function() {
//     var currentNum = 19
//     var nextNum = 3
//     assert.equal(22, add());
//   });
// });
