var https = require('https');
var requestOptions = {
  host: process.argv[2],
  path: process.argv[3]
};


function getAndPrintHTMLChunks (options) {

    https.get(options, function(response){

      response.setEncoding('utf8');

    response.on('data',function(data){
      console.log('Chunk Recvd', data + "\n");
    });

    response.on('end', function(){
      console.log('Response Stream Complete');
    });
  });

  }

getAndPrintHTMLChunks(requestOptions);
