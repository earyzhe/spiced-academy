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

    // console.log(request.url);
    // console.log(request.headers);
    // console.log(`Request mothod: `, request.method);

    logRequest(request);

    if (request.method == "GET"){

        var path = url.parse(request.url).pathname;
        response.setHeader('content-type', 'text/html');
        console.log(path);
        if (path == '/requests.txt' ){
            console.log('has Path');
            response.statusCode = 200;
            var fileStream = fs.createReadStream('requests.txt');
            fileStream.pipe(response);
            fileStream.on('data', (chunk) => {
                console.log('emitting');
                response.write(chunk);
            });
            fileStream.on('end', () => {
                console.log('EndingStream');
                response.end();
            });
        }   
        else{
            response.statusCode = 200;
            response.end('<h1>Hello world</h1>');
        }



        // console.log(`GET recieved. Lets send a response`);
        // Set the header data type and structure
        // set response header code
        // response.write('<h1>Hello world</h1>');
        // Finish the repose 
    }

    if (request.method == "POST") {
        // console.log("post request");
        let data = '';
        request.on("data", (chunk) => {
            data += chunk;
            // console.log(chunk);
        });
        request.on("end", () => {
            console.log(data);
            response.statusCode = 200;
            response.end();
            return;
        });
    }
});

server.listen(8080, () => {console.log("I'm listening");});

function logRequest(request){

    const logFilePath = "requests.txt";

    var data = `\nDate: ${new Date() } \nMethod: ${request.method}\nURL: ${request.url}\nHeaders:  ${request.headers}\n\n`;


    fs.appendFile(logFilePath, data, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
}

