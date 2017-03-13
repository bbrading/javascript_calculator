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
      this.calculateAnswer()
    }
    this.currentOperator = this.subtract
    if (this.currentNum == ""){
      currentNum = firstNum
    }
  },

  multiplyOperator: function(e){
    if (this.currentOperator !== ""){
      this.calculateAnswer()
    }
    this.currentOperator = this.multiply
    if (currentNum == ""){
      this.currentNum = firstNum
    }
  },

  divideOperator: function(e){
    if (this.currentOperator !== ""){
      this.calculateAnswer()
    }
    this.currentOperator = this.divide
    if (currentNum == ""){
      this.currentNum = firstNum
    }
  },

  add: function(){
    this.currentNum = parseFloat(this.currentNum, 10) + parseFloat(this.nextNum, 10)
    this.nextNum = ""
    return this.currentNum;
  },

  subtract: function(){
    currentNum = parseFloat(currentNum, 10) - parseFloat(nextNum, 10)
    nextNum = ""
    return currentNum
  },

  multiply: function(){
    currentNum = parseFloat(currentNum, 10) * parseFloat(nextNum, 10)
    nextNum = ""
    return currentNum
  },

  divide: function(){
    currentNum = parseFloat(currentNum, 10) / parseFloat(nextNum, 10)
    nextNum = ""
    return currentNum
  },

}
module.exports = calculator
