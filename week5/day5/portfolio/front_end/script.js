(function () {

    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll('script[type="text/x-handlebars-template"]');

    Array.prototype.slice.call(templates).forEach(function(script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });

    //////////////////////////////////////////////////////////
    //                  DO NOT TOUCH ABOVE                  //
    //////////////////////////////////////////////////////////

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/projects/",
        success: function (responseData) {
            console.log(responseData);

            var array = [];

            for (var prop in responseData) {
                array.push({ 
                    name: prop,
                    href: responseData[prop]
                });
            }
            console.log(array);
            document.getElementById('display').innerHTML = Handlebars.templates.cards({items: array});
        }
    });

    console.log('in js file');
    

})();