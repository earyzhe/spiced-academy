const fs = require('fs');
const myPath = __dirname;
const chalk = require('chalk');

logSizes(myPath);

function logSizes(pathToDir){

    const currentPath = pathToDir;

    fs.readdir(pathToDir, {withFileTypes: true, encoding: 'utf8'}, function(err, data){

        if (err){
            console.log(err);
        }
        else{

            for (let index = 0; index < data.length; index++) {
                const element = data[index];

                if (element.isFile()){
                    
                    fs.stat(`${currentPath}/${element.name}`, (err, data )=> {

                        if ( err ){
                            console.log(chalk.red(err));
                        }
                        else{
                            console.log(chalk.blue(`File ${element.name} with a file size of, ${chalk.underline(data.size)} bytes`));
                        }
                    });
                }
                else if ( element.isDirectory()){  
                    const newPath = `${currentPath}/${element.name}`;
                    console.log(chalk.green(`Next : ${newPath}`));

                    logSizes(newPath);
                }
                else{
                    console.log(chalk.bgRed(`What was that?!?!? : `));
                    console.log(element);
                }
            }
        }
    });
}