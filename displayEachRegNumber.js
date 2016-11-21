// importing assert module
const assert = require('assert')

function displayEachRegNumber(regNum){
  var carRegNumber = regNum.split(',');
  for (var i = 0; i < carRegNumber.length; i++){
    // console.log(carRegNumber[i].trim());

  }
  return carRegNumber[i];
}
// calling my function
displayEachRegNumber('CA 449462, CJ 775762, CY 12244');
// defining my assert
assert.equal(displayEachRegNumber('carRegNumber[i]'));
