var express = require('express');
var app = express();

app.use(function logUrl(req, res, next) {
    console.log(req.url);
    next();
});

app.use(require('body-parser').urlencoded({
    extended: false
}));

/// Calls next
/// Makes the default Location for routing
app.use(express.static(__dirname + '/projects'));

app.get('/', function(req, res) {
    res.send('<!doctype html><title>Hello World!</title><p>Hello World!');
});



app.listen(8080, () => console.log(`I'm listening`));
