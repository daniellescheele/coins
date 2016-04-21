
var input = 3.67;
var quarterVal = .25;
var dimeVal = .10;
var nickelVal = .05;
var pennyVal = .01;

function coinCounter () {
  var coinPurse = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  };

    coinPurse.quarters = Math.floor(input/quarterVal);
    console.log(coinPurse.quarters);
    input = (input % quarterVal).toFixed(2);
    coinPurse.dimes = Math.floor(input / dimeVal);
    console.log(coinPurse.dimes);
    input = (input % dimeVal).toFixed(2);
    coinPurse.nickels = Math.floor(input / nickelVal);
    console.log(coinPurse.nickels);
    input = (input % nickelVal).toFixed(2);
    coinPurse.pennies = Math.floor(input / pennyVal);
    console.log(coinPurse.pennies);


    return coinPurse;
    console.log(coinPurse);
}


 
var coins = coinCounter();
console.log(coins);


