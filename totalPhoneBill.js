function totalPhoneBill(phoneBill){
  var billList = phoneBill.split(', ');
  var total = 0;

  for (var i = 0; i < billList.length; i++){

    if (billList[i] === 'call'){
      total = total + 2.75;
    }
    else if(billList[i] === 'sms'){
      total = total + 0.65;
    }
  }//end of my forloop
  return total.toFixed(2);
}//end of my function
const assert = require('assert');
var totalList = totalPhoneBill('call, sms, call, sms, sms');
assert.equal(totalList, 7.45);
