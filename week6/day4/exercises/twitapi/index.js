const express = require('express');
const app = express();
const fs = require('fs');
const util = require('util');
const twApi = require('./twApi');
const getTwitterToken = util.promisify(twApi.getToken);
const getTwitterTweets = util.promisify(twApi.getTweets);

app.use(function (req, res, next) {
    next();
});

app.use(express.static('./public'));

app.get('/data.json', (req, res) => {
    getTwitterToken()
        .then((token) => {
            return getTwitterTweets(token);
        })
        .then((tweets) => {
            tweets = tweets.filter(function(tweet){
                return tweet.entities.urls.length == 1;
            }).map(function(tweet){
                return {
                    href: tweet.entities.urls[0].url,
                    text: tweet.full_text.replace(/(?:https?|ftp|http):\/\/[\n\S]+/g, '')
                };
            });

            res.send(tweets);
        })
        .catch((err) =>{
            console.log(err);
        });
});


app.get('*', (req, res, next) => {
    res.sendStatus(404);
    res.end();
});

app.listen(8080, () => console.log('Sever running on localhost:8080'));