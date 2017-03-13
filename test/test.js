
var assert = require('assert');
var calculator = require('../calculator.js')


describe('add', function() {
  it('should add the currentNum and nextNum', function() {
    calculator.currentNum = 19
    calculator.nextNum = 3
    assert.equal(22, calculator.add());
  });
});
