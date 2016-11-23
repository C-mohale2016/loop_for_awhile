function allFromTown(townRegNo,location){
  var regNo = townRegNo.split(',');
  var allRegNo = [];
  for (var i = 0; i < regNo.length; i++){
    if (regNo[i].startsWith(location)){
      allRegNo.push(regNo[i]);
    }
  } //end of forloop
  return allRegNo;
} //end of function

const assert = require('assert');
var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
// console.log(fromStellies);
assert.deepEqual(fromStellies, ['CL 124', 'CL 345', 'CL 341']);

var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');
// // console.log(fromKuilsriver);
assert.deepEqual(fromKuilsriver, []);
