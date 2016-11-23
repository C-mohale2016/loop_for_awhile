function countAllFromTown(carPlateNum){
  var carRegNumber = carPlateNum.split(',');
  var plateNo = [];
  for (var i = 0; i < carRegNumber.length; i++){
    if (carRegNumber[i].startsWith('CL')){
      plateNo.push(carRegNumber[i]);
    }//end of my conditional statement
  }//end of my forloop
  return plateNo.length;
}//end of my function
const assert = require('assert');
var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
// console.log(fromStellies);
//fromStellies should contains
assert.deepEqual(fromStellies, 3)
