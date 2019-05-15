module.exports = function fn(value) {

    if (typeof value == "string"){
        return value.split('').reverse().join('');
    }
    else if (Array.isArray(value)){

        for (let index = 0; index < value.length; index++) {
            value[index] = fn(value[index]);
        }
        return value;
    }
    else{
        return null;
    }
};
