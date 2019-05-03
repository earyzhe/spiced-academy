
const http = require('http');
const queryString = require('querystring');
const url = require('url');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const port = 8080;

const server = http.createServer();

const files = getFiles(__dirname + '/projects' );
// console.log(files);

// Request object is a read stream and respose is a write stream
server.on('request', (request, response) => {

    switch (request.method) {

                    case 'GET':

                        // Security check
                        console.log(`Request url: ${request.url}`);
                        var myPath = path.normalize(__dirname + request.url);
                        
                        if (!myPath.startsWith(__dirname + '/projects')) {
                            response.statusCode = 403;
                            return response.end();
                        }

                        console.log(`Projects path : ${myPath}`);

                        //Does the request url correspond to an item in the projects folder?
                        console.log(`Path Basename: ${path.basename(myPath)}`);

                        var actualPath = files[path.basename(myPath)];

                        console.log(`Actual path: ${actualPath}`);

                        // Is it a directory?
                        fs.stat(actualPath, (err, stats) => {
                            
                            if ( err ) { 
                                console.log(err);
                                response.statusCode = 403;
                                return response.end(); 
                            }
                            else{
                                console.log(stats);
                                if (stats.isFile()){
                                    // Serve the file
                                    serveFile(response, actualPath);
                                }
                                if (stats.isDirectory()){

                                    // Does the request url end with a slash?
                                    if (myPath.slice(-1) == '/'){

                                        // Is there an index.html in there?
                                        if (fs.existsSync(path + 'index.html')) {
                                            serveFile(myPath + 'index.html');
                                        }
                                    }
                                    else{
                                        // Redirect to the request url with a slash appended to it    
                                        response.setHeader("Location", myPath + '/');
                                        response.statusCode = 302;
                                        response.end();
                                    }
                                }
                            }
                        });

                        break;

                    case 'POST':

                        break;

                    default:
                        response.statusCode = 405;
                        response.end();
                        break;
    }


}).listen(port, () => { console.log(`Running server on ${port}`); });


function serveFile(response, fileLocation){

    // Make dynamic
    response.setHeader('content-type', setConentTypeWithExt(path.extname(fileLocation)));
    response.statusCode = 200;
    console.log(`File location to setupReadStream ${fileLocation}`);
    const readStream = fs.createReadStream(fileLocation);
    readStream.on('error', err => {
        console.log(chalk.red(err));
        response.statusCode = 404;
        response.end();
    });
    /// Automatically ends when stream data ends.
    readStream.pipe(response);
}

function setConentTypeWithExt(ext){

    switch (ext) {

                    case '.html': return 'text/html';
                    case '.css': return	'text/css';
                    case '.js': return 'text/javascript';
                    case '.json': return 'application/json';
                    case '.gif': return	'image/gif';
                    case '.jpg': return	'image/jpeg';
                    case '.png': return	'image/png';
                    case '.svg': return	'image/svg+xml';
                    default: return 'text/html';
    }
}


function getFiles(path){
    const result = fs.readdirSync( path, { withFileTypes:true, encoding: 'utf8' });
    const newObj= {};

    if (result) {

        for (let index = 0; index < result.length; index++) {

            const element = result[index];

            if (element.isFile()){        
                newObj[element.name] = `${path}/${element.name}`;
            }
            else if ( element.isDirectory()){ 
                const fileobj =  getFiles(`${path}/${element.name}`);
                for (var prop in fileobj) {
                    newObj[prop] = fileobj[prop]; 
                }
            }
            else{
                console.log(chalk.bgRed(`What was that?!?!? : `));
                console.log(element);
            }
        }
    }
    else{
        console.log(chalk.bgRed(result));
    }
    return newObj;
}

