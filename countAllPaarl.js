function countAllPaarl(countAllReg){
  var countReg = countAllReg.split(',');

  var allFromPaarl = [];
  for (var i = 0; i < countReg.length; i++){

    if (countReg[i].startsWith('CJ')){
      allFromPaarl.push(countReg[i]);

    }

  }
  return allFromPaarl.length;
}
const assert = require('assert');

assert.equal(countAllPaarl('CA 646587,CJ 987654,CY 325554,CJ 425325'),2);
