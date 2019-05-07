const express = require('express');
const app = express();

app.get('/hello/world', (req, res) => {
    console.log(require(req.url, req.headers));
    res.send()
    ``;
});



app.listen(8080, () => console.log(`I'm listening`));