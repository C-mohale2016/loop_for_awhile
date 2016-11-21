// importing assert module
const assert = require('assert')

function displayEachRegNumber(regNum){
  var carRegNumber = regNum.split(',');
  for (var i = 0; i < carRegNumber.length; i++){
    console.log(carRegNumber[i].trim());

  }
  return carRegNumber[i];
}
displayEachRegNumber('CA 449462, CJ 775762, CY 12244');
assert.equal(displayEachRegNumber('carRegNumber[i]'));
