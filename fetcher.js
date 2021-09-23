const request = require('request');
const fs = require('fs');


const URL = process.argv[2];
const path = process.argv[3];



request(URL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
 
  fs.writeFile(path, body, (err) => { 
    if(err) {
      console.log(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`)
  },)
});


