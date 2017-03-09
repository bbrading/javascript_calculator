$(document).ready(function(){
  var firstNum = "";
  var nextNum = "";
  var currentNum = "";
  var currentOperator = "";

  $(".button").on("click", clickEvent)
  $("#add").on("click", addOperator)
  $("#subtract").on("click", subtractOperator)
  $("#multiply").on("click", multiplyOperator)
  $("#divide").on("click", divideOperator)
  $("#equals").on("click", calculateAnswer)
  $("#clear").on("click", clear)

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

  function multiplyOperator(e){
    if (currentOperator !== ""){
      calculateAnswer()
    }
    currentOperator = multiply
    if (currentNum == ""){
      currentNum = firstNum
    }
  }

  function divideOperator(e){
    if (currentOperator !== ""){
      calculateAnswer()
    }
    currentOperator = divide
    if (currentNum == ""){
      currentNum = firstNum
    }
  }

  function add(){
    currentNum = parseFloat(currentNum, 10) + parseFloat(nextNum, 10)
    nextNum = ""
    return currentNum
  }

  function subtract(){
    currentNum = parseFloat(currentNum, 10) - parseFloat(nextNum, 10)
    nextNum = ""
    return currentNum
  }

  function multiply(){
    currentNum = parseFloat(currentNum, 10) * parseFloat(nextNum, 10)
    nextNum = ""
    return currentNum
  }

  function divide(){
    currentNum = parseFloat(currentNum, 10) / parseFloat(nextNum, 10)
    nextNum = ""
    return currentNum
  }

  function calculateAnswer(){
    var answer = currentOperator()
    $("#screen").html(answer)
  }


  function clear(){
    firstNum = "";
    nextNum = "";
    currentNum = "";
    currentOperator = "";
    $("#screen").html("0")
  }

})
