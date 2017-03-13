
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

var calculator = {

  firstNum: "",
  nextNum: "",
  currentNum: "",
  currentOperator: "",

  calculateAnswer: function(){
  var answer = this.currentOperator()
  $("#screen").html(answer)
  },

  addOperator: function(){
    if (this.currentOperator !== ""){
      this.calculateAnswer.bind(calculator)();
    }
    this.currentOperator = this.add.bind(calculator);
    if (this.currentNum == ""){
      this.currentNum = this.firstNum
    }
  },

  subtractOperator: function(e){
    if (this.currentOperator !== ""){
      this.calculateAnswer.bind(calculator)();
    }
    this.currentOperator = this.subtract.bind(calculator);
    if (this.currentNum == ""){
      this.currentNum = this.firstNum
    }
  },

  multiplyOperator: function(e){
    if (this.currentOperator !== ""){
      this.calculateAnswer.bind(calculator)();
    }
    this.currentOperator = this.multiply.bind(calculator);
    if (this.currentNum == ""){
      this.currentNum = this.firstNum
    }
  },

  divideOperator: function(e){
    if (this.currentOperator !== ""){
      this.calculateAnswer.bind(calculator)();
    }
    this.currentOperator = this.divide.bind(calculator);
    if (this.currentNum == ""){
      this.currentNum = this.firstNum
    }
  },

  add: function(){
    this.currentNum = parseFloat(this.currentNum, 10) + parseFloat(this.nextNum, 10)
    this.nextNum = ""
    return this.currentNum;
  },

  subtract: function(){
    this.currentNum = parseFloat(this.currentNum, 10) - parseFloat(this.nextNum, 10)
    this.nextNum = ""
    return this.currentNum
  },

  multiply: function(){
    this.currentNum = parseFloat(this.currentNum, 10) * parseFloat(this.nextNum, 10)
    this.nextNum = ""
    return this.currentNum
  },

  divide: function(){
    this.currentNum = parseFloat(this.currentNum, 10) / parseFloat(this.nextNum, 10)
    this.nextNum = ""
    return this.currentNum
  },

}
