var calculator  = require("./calculator.js")

$(document).ready(function(){
  $("#screen").html("0")
  $(".numberButton").on("click", calculator.numberClick.bind(calculator))
  $("#add").on("click", calculator.addOperator.bind(calculator))
  $("#subtract").on("click", calculator.subtractOperator.bind(calculator))
  $("#multiply").on("click", calculator.multiplyOperator.bind(calculator))
  $("#divide").on("click", calculator.divideOperator.bind(calculator))
  $("#equals").on("click", calculator.calculateAnswer.bind(calculator))
  $("#clear").on("click", calculator.clear.bind(calculator))
})
