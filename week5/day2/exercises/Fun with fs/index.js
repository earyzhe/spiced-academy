const fs = require('fs');
const myPath = __dirname;
const chalk = require('chalk');

// logSizes(myPath);

function logSizes(pathToDir){

    const currentPath = pathToDir;

    fs.readdir(pathToDir, {withFileTypes: true, encoding: 'utf8'}, function(err, data){

        if (err){
            console.log(chalk.red(err));
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

var test = mapSizes(myPath);

var jsonObj = JSON.stringify(test, null, 4);

fs.writeFileSync('files.json', jsonObj);


function mapSizes(pathToDir){

    var result = fs.readdirSync( pathToDir, {withFileTypes:true, encoding: 'utf8'});
    console.log(result);
    var newObj= {};

    if (result) {

        for (let index = 0; index < result.length; index++) {

            const element = result[index];

            if (element.isFile()){        
                newObj[element.name] = fs.statSync(`${pathToDir}/${element.name}`).size;
            }
            else if ( element.isDirectory()){  
                newObj[element.name] = mapSizes(`${pathToDir}/${element.name}`);
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
