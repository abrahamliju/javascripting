var https = require('https');

function getAndPrintHTMLChunks () {

var requestOptions = {
  host: 'sytantris.github.io',
  path:'/http-examples/step1.html'
};

https.get(requestOptions, function(response){

  response.setEncoding('utf8');

  response.on('data',function(data){
    var chunkData = 0;
    chunkData = chunkData + data;
    console.log('Chunk Recvd',chunkData + "\n");
  });

  response.on('end', function(){
    console.log('Response Stream Complete');
  });
});

}

getAndPrintHTMLChunks();
