// console.log('Index');
// console.log(`Directory = ${__dirname}`);
// console.log(`Filename ${__filename}`);
// console.log(`Process array of details of file locations ${process.argv}`);
const myMod = require("./myModule.js");
const url = require('url');
const queryString = require('querystring');
const chalk =  require('chalk');
// myMod.sayHello();


// console.log(url);
console.log(chalk.red(url.parse));