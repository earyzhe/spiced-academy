const express = require('express');
const hb = require('express-handlebars');
const app = express();
const futuramaArr = require('./futurama.json');

app.engine('handlebars', hb(0));

app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        // Sets the layout template
        layout: 'main',
        siteName: 'Futurama',
        characters:futuramaArr
    });
});

app.get('/about', (req, res) => {
    res.render('about',{
        layout: 'main',
        siteName: 'Futurama',
        characters:futuramaArr
    });
});

app.get('/:name', (req, res) => {
    // params are the parameter in the url or the route
    console.log(req.params.name);
    res.render('character',{
        layout: 'main',
        imagename: req.params.name,
    });
});

app.listen(8080, () => {console.log('Server running on localhost:8080');});