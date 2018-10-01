var request = require('request');
var fs = require('fs');

console.log("Getting Image")
request.get('https://sytantris.github.io/http-examples/future.jpg')
      .on('error', function(err) {
        throw err;
      })
      .on('response', function (response) {
        console.log("All good man")
        console.log(response.statusMessage)
        console.log(response.headers['content-type'])

      })
      .pipe(fs.createWriteStream('./future.jpg'));
      //.on('end', function() {
      //  console.log("Download Complete")
      //})