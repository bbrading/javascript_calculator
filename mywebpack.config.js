/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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

module.exports = calculator


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var calculator  = __webpack_require__(0)

$(document).ready(function(){
  debugger
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

/*var calculator = {

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

}*/


/***/ })
/******/ ]);