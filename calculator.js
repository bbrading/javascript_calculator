var calculator = {

  firstNum: "",
  nextNum: "",
  currentNum: "",
  currentOperator: "",

  numberClick: function(e){
    if (this.currentNum === ""){
      this.firstNum += e.currentTarget.id
      $("#screen").html(this.firstNum)
    }
    else {
      this.nextNum += e.currentTarget.id
      $("#screen").html(this.nextNum)
    }
  },

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

  clear: function(){
    this.firstNum = "";
    this.nextNum = "";
    this.currentNum = "";
    this.currentOperator = "";
    $("#screen").html("0")
  },

}

module.exports = calculator
