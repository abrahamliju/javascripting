var getHTML = require('../http-functions');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printtoUppercase (html) {
  //var str = "";

  console.log(html.split('').reverse().join(''));
}

getHTML(requestOptions,printtoUppercase);