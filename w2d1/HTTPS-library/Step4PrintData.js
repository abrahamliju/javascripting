
var https = require('https');
function printHTML (html) {
  console.log(html);
}

function getAndPrintHTMLChunks (options, callback) {

https.get(options, function(response){

  response.setEncoding('utf8');

  response.on('data',function(data){
    //console.log('Chunk Recvd', data + "\n");
    return callback(data);
  });

  response.on('end', function(){
    console.log('Response Stream Complete');
    //return callback()
  });
});

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getAndPrintHTMLChunks(requestOptions,printHTML);