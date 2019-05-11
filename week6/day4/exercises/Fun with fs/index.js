const {readdir, stat} = require('fs').promises;
const fs = require('fs');
const myPath = __dirname;
const chalk = require('chalk');

logSizes(myPath);

function logSizes(pathToDir){

    const currentPath = pathToDir;

    readdir(pathToDir, {withFileTypes: true, encoding: 'utf8'}).then((data) =>{
        for (let index = 0; index < data.length; index++) {
            const element = data[index];

            if (element.isFile()){
                
                stat(`${currentPath}/${element.name}`).then((data) => {
                
                    console.log(chalk.blue(`File ${element.name} with a file size of, ${chalk.underline(data.size)} bytes`));
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
    })
        .then(() => console.log('done'))
        .catch((err) => {
            console.log(chalk.red(err));
        });
}

var test = mapSizes(myPath);
test.then((t) => { 
    console.log(t);
    var jsonObj = JSON.stringify(test, null, 4);
    fs.writeFile('files.json', jsonObj);    
});

// console.log(test);

// var jsonObj = JSON.stringify(test, null, 4);

// fs.writeFile('files.json', jsonObj);

function mapSizes(pathToDir){

    return new Promise(( resolve, reject) => {
        
        readdir( pathToDir, { withFileTypes:true, encoding: 'utf8' })
            .then((result) => {

                console.log('Result of readIr is ', result);
                

                return Promise.all(result.map((element) => element.isFile() ? 

                    stat(`${pathToDir}/${element.name}`).size :

                    new Promise((resolve, reject) => {
                        resolve(mapSizes(`${pathToDir}/${element.name}`));
                    })
                )
                ).then((results) => {

                    console.log("Results from map are");
                    console.log(results);
                    var newObj= {};
                    for (let index = 0; index < results.length; index++) {
    
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
                });
            });
    }
    );
}
