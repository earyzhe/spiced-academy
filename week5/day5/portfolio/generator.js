const fs = require('fs');
const chalk = require('chalk');


exports.getFiles = function(path){
    const result = fs.readdirSync( path, { withFileTypes:true, encoding: 'utf8' });
    const newObj= {};

    if (result) {

        for (let index = 0; index < result.length; index++) {

            const element = result[index];

            if (element.isFile()){        
                newObj[element.name] = `${path}/${element.name}`;
            }
            else if ( element.isDirectory()){ 
                const fileobj =  exports.getFiles(`${path}/${element.name}`);
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
};

exports.getDetails = function(pathToDir){

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

                    exports.getDetails(newPath);
                }
                else{
                    console.log(chalk.bgRed(`What was that?!?!? : `));
                    console.log(element);
                }
            }
        }
    });
};


exports.getDirectorys = function(pathToDir, completion){

    const currentPath = pathToDir;
    const obj = {};
    

    fs.readdir(pathToDir, {withFileTypes: true, encoding: 'utf8'}, function(err, data){

        if (err){
            console.log(chalk.red(err));
        }
        else{
            console.log('this is data');
            console.log(data);
            
            for (let index = 0; index < data.length; index++) {

                const element = data[index];
                console.log('element');
                console.log(element);

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
                    obj[element.name] = newPath;
                }
                else{
                    console.log(chalk.bgRed(`What was that?!?!? : `));
                    console.log(element);
                }
                console.log('onj now');
                console.log(obj);
            }
        }
        console.log(obj);
        completion(obj);
    });
};

// exports.htmlFromDir(obj){
//     for (var prop in obj) {
        
//     }
// }


