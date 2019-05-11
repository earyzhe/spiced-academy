module.exports.dbl = function dbl(n){
    return new Promise((res, rej)=>{
        setTimeout(() => {
            if (isNaN(n)) {
                rej(new Error('Bad number'));
            }
            else{
                res(n*2);
            }
        }, 2000);
    });
};