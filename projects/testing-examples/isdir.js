const fs = require('fs');

module.exports.isDir = function isDir(path, callback){
    fs.stat(path, (error, data) => {
        callback(error, data.isDirectory());
    });
};
