const http = require('http');
const fs = require('fs');
const url = require('url');

// The call back is fired every time  a request is made
//  A respose object is created with some meta data
// We add properties to the respose object before sending it back
const server = http.createServer(function(request, response){

    /// log and request errors
    request.on('error', (error) =>{
        console.log('err: ', error);
    });

    /// log any response errors
    response.on('error', (error) =>{
        console.log('err: ', error);
    });

    logRequest(request);

    if (request.method == "POST") {
        console.log('in post');
        response.setHeader("Location", 'www.google.com');
        response.statusCode = 302;
        response.end();
    }
    else if (request.method == "GET" || request.method == "HEAD"){
        console.log('GET');
        var path = url.parse(request.url).pathname;
        response.setHeader('content-type', 'text/html');
        response.statusCode = 200;

        if (path == '/requests.txt' ){
            response.statusCode = 200;
            var fileStream = fs.createReadStream('requests.txt');
            fileStream.pipe(response);
            fileStream.on('data', (chunk) => {
                response.write(chunk);
            });
            fileStream.on('end', () => {
                response.end();            
            });
        }   
        else{
            if (request.method == "GET"){
                response.end(
                    `<!doctype html>
                    <html>
                    <title>Hello World!</title>
                    <p>Hello World!</p>
                    </html>
                `); 
            }
            else if(request.method == "HEAD"){
                response.end();
            }
        }
    }
    else{
        response.statusCode = 405;
        response.end();
    }
});

server.listen(8080, () => { console.log("I'm listening"); });

function logRequest(request){

    // console.log(request.url);
    // console.log(request.headers);
    // console.log(`Request mothod: `, request.method);

    const logFilePath = "requests.txt";

    var data = `\nDate: ${ new Date() } \nMethod: ${request.method}\nURL: ${request.url}\nHeaders:  ${request.headers}\n\n`;

    fs.appendFile(logFilePath, data, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
}

