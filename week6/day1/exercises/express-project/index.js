var express = require('express');
var app = express();
var basicAuth = require('basic-auth');

var auth = function(req, res, next) {
    var creds = basicAuth(req);
    if (!creds || creds.name != 'Andrew' || creds.pass != 'xxx') {
        res.setHeader('WWW-Authenticate', 'Basic realm="Enter your credentials to see this stuff."');
        res.sendStatus(401);
    } else {
        next();
    }
};

// app.use(auth);


/// This gives you access to the body parameter object of the request onject
app.use(require('body-parser').urlencoded({
    extended: false
}));

/// This gives you access to the cookie parameter object of the request onject

app.use(require('cookie-parser')());

app.use(function (req, res, next) {

    var cookiesAccepted = req.cookies.cookies_accepted;

    if (cookiesAccepted) {
        next();
    }
    else{

        if (req.url != '/cookie'){

            res.cookie('nextUrl', req.url);
            res.redirect('/cookie');

        }
        else{
            next();
        }
    }
});

// Puts sets all files in the declares path as static at the root of the folder.
app.use(express.static(__dirname + '/projects'));

app.get('/cookie', function(req, res) {
    res.sendFile('cookie_form/index.html', {root: __dirname });
});

app.post('/cookie', function(req, res) {

    if (req.body.cookie){
        res.cookie('cookies_accepted', 'yes');
        res.redirect(req.cookies.nextUrl);
    }
    else{
        // Show the submit button
        res.sendFile('cookie_form/must_accept.html', {root: __dirname });
    }
});


/// Makes the default Location for routing
app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname });
});


app.listen(8080, () => console.log(`I'm listening`));
