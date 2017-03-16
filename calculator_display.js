var calculator  = require("./calculator.js")

$(document).ready(function(){
  $("#screen").html("0")
  $(".numberButton").on("click", numberClick)
  $("#add").on("click", calculator.addOperator.bind(calculator))
  $("#subtract").on("click", calculator.subtractOperator.bind(calculator))
  $("#multiply").on("click", calculator.multiplyOperator.bind(calculator))
  $("#divide").on("click", calculator.divideOperator.bind(calculator))
  $("#equals").on("click", calculator.calculateAnswer.bind(calculator))
  $("#clear").on("click", clear)

  function numberClick(e){
    if (calculator.currentNum === ""){
      calculator.firstNum += e.currentTarget.id
      $("#screen").html(calculator.firstNum)
    }
    else {
      calculator.nextNum += e.currentTarget.id
      $("#screen").html(calculator.nextNum)
    }
  }

  function clear(){
    calculator.firstNum = "";
    calculator.nextNum = "";
    calculator.currentNum = "";
    calculator.currentOperator = "";
    $("#screen").html("0")
  }

})
