const express = require('express');
const app = express();
const twApi = require('./twApi');

app.use(function (req, res, next) {
    next();
});

app.use(express.static('./public'));


app.get('/data.json', (req, res) => {
    twApi.getToken(function(err, token){
        if (err){
            res.sendStatus(500);
        }
        else{
            twApi.getTweets(token, function  (err, tweets){
                if (err) {
                    res.sendStatus(500);
                }
                else{
                    tweets = tweets.filter(function(tweet){
                        return tweet.entities.urls.length == 1;
                    }).map(function(tweet){
                        return {
                            href: tweet.entities.urls[0].url,
                            text: tweet.full_text.replace(/(?:https?|ftp|http):\/\/[\n\S]+/g, '')
                        };
                    });

                    res.send(tweets);
                }
            });
        }
    });
});

app.listen(8080, () => console.log('Sever running on localhost:8080'));