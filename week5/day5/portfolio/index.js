
const http = require('http');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const port = 8080;
const gener = require('./generator.js');


const server = http.createServer();


// Request object is a read stream and respose is a write stream
server.on('request', (request, response) => {

    console.log(`New ${request.method}`);
    var homeDir = `${__dirname}/front_end/`;


    switch (request.method) {
        
                    case 'GET':

                        // Security check
                        console.log(`Request url: ${request.url}`);

                        if (request.url == '/'){
                            navToHome(homeDir, response);
                            return;
                        }

                        if (request.url == '/script.js'){
                            serveFile(response, homeDir + 'script.js');
                            return;
                        }

                        if (request.url == '/styles.css'){
                            serveFile(response, homeDir + 'styles.css');
                            return;
                        }
                        
                        if (request.url == '/projects/'){
                            serveFile(response, __dirname + '/files.json');
                            return;
                        }
                            
                        var actualPath = path.normalize(__dirname + request.url);


                        
                        if (!actualPath.startsWith(__dirname + '/projects')) {
                            response.statusCode = 403;
                            return response.end();
                        }

                        // Is it a directory?
                        fs.stat(actualPath, (err, stats) => {
                            
                            if ( err ) { 
                                console.log(err);
                                response.statusCode = 403;
                                return response.end(); 
                            }
                            else{
                                if (stats.isFile()){
                                    // Serve the file
                                    serveFile(response, actualPath);
                                }
                                if (stats.isDirectory()){

                                    // Does the request url end with a slash?
                                    if (actualPath.slice(-1) == '/'){

                                        // Is there an index.html in there?
                                        if (fs.existsSync(actualPath + '/index.html')) {

                                            serveFile(response, actualPath + 'index.html');
                                        }
                                    }
                                    else{
                                        // Redirect to the request url with a slash appended to it 
                                        console.log(`Redirecting to ${path.basename(actualPath) + '/'}`);   
                                        response.setHeader("Location", path.basename(actualPath) + '/');
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

function navToHome(homeDir, response){

    gener.getDirectorys(`${__dirname}/projects/`, function(test){
        console.log('testing');
        console.log(test);
        var jsonObj = JSON.stringify(test, null, 4);
        fs.writeFileSync('files.json', jsonObj);
        
        fs.readdir(homeDir, {withFileTypes: true, encoding: 'utf8'}, function(err, data){
            
            if (err){
                console.log(chalk.red(err));
            }
            else{
                
                for (let index = 0; index < data.length; index++) {
                    const element = data[index];
                    
                    if (element.isFile()){
                        if (element.name == 'index.html'){
                            serveFile(response, `${homeDir}${element.name}`); 
                        }
                    }
                }
            }
        });
    });
}
        
        
        
function serveFile(response, fileLocation){

    // Make dynamic
    console.log(chalk.green(`Preparing to serve File : ${fileLocation}`));

    response.setHeader('content-type', setConentTypeWithExt(path.extname(fileLocation)));
    response.statusCode = 200;
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



