(function () {

    var person = {
        name: 'Andrew',
        age: 32,
    };


    var notAtAllValid = 'yes no i dont know';

    var validJson = {
        'name' : 'Andrew',
        'age' : 32,
    }

    var notValidJson = {
        name : 'Andrew',
        age : 32,
    }

    // console.log(JSON.parse(person));
    var Stringified = JSON.stringify(person);

    console.log('Stringified ' + notAtAllValid);
    console.log('Parsed ' + JSON.parse(notAtAllValid));

    console.log('Stringified ' + validJson);
    console.log('Parsed ' + JSON.parse(validJson));

    console.log('Stringified ' + notValidJson);
    console.log('Parsed ' + JSON.parse(Stringified));

    localStorage.setItem('name' , person.name);
    localStorage.getItem('name');
})();