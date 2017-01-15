function getRandom() {
  return Math.floor(Math.random() * 6 ) + 1;
}

var noOfTimes = process.argv.slice(2);
var result = "";

for (var i = 1; i <= noOfTimes; i++) {
    result += getRandom() + ",";
 }

console.log( " Rolled",noOfTimes[0],"dice " + result.slice(0,-1) );

