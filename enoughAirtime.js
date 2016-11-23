function enoughAirtime(airtimeUsage,air){
  var airtimeBill = airtimeUsage.split(',');
  var total = 0;

  for (var i = 0; i < airtimeBill.length; i++){

    if (airtimeBill[i] === 'call'){
      total = total + 1.88;
    }
    else if(airtimeBill[i] === 'data'){
      total = total + 12;
    }
    else if(airtimeBill[i] === 'sms'){
      total = total + 0.75;
    }
    else{
      total = total + 0;
    }
  }//end of forloop
  var balance = air - total;
  return balance.toFixed(2);
}//end of function

const assert = require('assert')
var totalBalance = enoughAirtime('call,call,call,data,sms,sms,call,data', 50);
assert.equal(totalBalance, 16.98);
