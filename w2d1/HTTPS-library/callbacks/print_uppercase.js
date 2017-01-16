var getHTML = require('../http-functions');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printtoUppercase (html) {
  //var str ;
  //str = html.getElementById()
  console.log(html.toUpperCase());
}

getHTML(requestOptions,printtoUppercase);