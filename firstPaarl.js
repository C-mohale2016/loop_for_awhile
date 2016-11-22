// importing assert module
const assert = require('assert')

function firstPaarl(location){
  var carRegNumber = location.split(',');

  for (var i = 0; i < carRegNumber.length; i++){
    if (carRegNumber[i].startsWith('CJ')){

      // console.log(carRegNumber[i]);
      return carRegNumber[i];
    }

  }

}

firstPaarl('CA 448-225,CY 788-422,CJ 334-445');
assert.equal(firstPaarl('carRegNumber[i]'));
