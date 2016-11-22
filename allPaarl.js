// importing assert module
const assert = require('assert');
// declaring allPaarl as my function name
function allPaarl(parl){
  var carRegNumber = parl.split(',');

  for (var i = 0; i < carRegNumber.length; i++)

  if (carRegNumber[i].startsWith('CJ')){

    // console.log(carRegNumber[i]);

  }
  return carRegNumber[i];
}

allPaarl('CA 325-445,CJ 331-887,CY 155-785,CJ 988-474');
assert.equal(allPaarl('carRegNumber'));
