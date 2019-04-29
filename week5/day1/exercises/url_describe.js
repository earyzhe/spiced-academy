
const url = require('url');
const queryString = require('querystring');
const uri = process.argv[2];
console.log(uri);
console.log(url);
console.log(url.parse(uri));
const urlObj = url.parse(uri);
console.log(queryString.parse(urlObj.query)); 
// console.log(queryString.parse(url));
console.log();
