
const http = require('http');
const queryString = require('querystring');
const chalk = require('chalk');
const fs = require('fs');

console.log(chalk.red('this text is red'));
console.log(chalk.green('this text is green'));


const server = http.createServer();


server.on('request', (request, response) => {

    /// log and request errors
    request.on('error', (error) =>{
        console.log('err: ', error);
    });
    
    /// log any response errors
    response.on('error', (error) =>{
        console.log('err: ', error);
    });

    switch (request.method) {

                    case 'GET':
                        response.setHeader('content-type', 'text/html');
                        response.statusCode = 200;
                        var fileStream = fs.createReadStream('index.html');
                        fileStream.pipe(response);
                        fileStream.on('end', () => {
                            response.end();
                        });
                        break;


                    case 'POST':
                        var body = '';
                        request.on('data', function(chunk) {
                            body += chunk;
                        }).on('end', function() {

                            var details = queryString.parse(body);
                            console.log(chalk[details.color](details.text));

                            response.setHeader('content-type', 'text/html');
                            response.statusCode = 200;
                            response.end(
                                `<!doctype html>
                                <html>
                                <title>${details.text}</title>
                                <a href="/" style="color:${details.color}">${details.text}</a>
                                </html>`
                            );
                        });
                        break;
        
                    default:
                        response.statusCode = 200;
                        response.end();

                        break;
    }
});



server.listen(8080, () => { console.log(`Running server`); });