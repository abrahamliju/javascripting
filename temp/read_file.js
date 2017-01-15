var fs = require("fs");

fs.readFile(process.argv[2], function (err, data){
  if(err){
    return console.error(err);
  }
  console.log("Contents of File Read", data.toString());
});