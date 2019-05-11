// comes with node
const https = require('https');
const chalk = require('chalk');
const { consumerKey, consumerSecret } = require('./secrets');

exports.getToken = function(callback){

    const encodedCredentials = Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64");

    // Like an Ajax call
   
    const req = https.request({
        host: 'api.twitter.com',
        path: '/oauth2/token',
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
            authorization: `Basic ${encodedCredentials}`
        }
    }, 
    // The the response comes in a callback
    (res) => {
        if (res.statusCode != 200){
            callback(new Error(res.statusCode));
        }
        else{

            let body = '';
            res
                .on('data', (chunk) => body += chunk)
                .on('end', () => {
                    try {
                        callback(null, JSON.parse(body).access_token);
                    } catch (e) {
                        callback(e);
                    }
                });
        }
    });

    req.on('error', (err) => callback(err));
    /// Written into the body
    req.write('grant_type=client_credentials');
    req.end();
};

exports.getTweets = function(token , screenName, callback){

    const req = https.request({
        host: 'api.twitter.com',
        path: `/1.1/statuses/user_timeline.json?screen_name=${screenName}&count=20&tweet_mode=extended`,
        method: 'GET',
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
            authorization: `Bearer ${token}`
        }
    }, 
    // The the response comes in a callback
    (res) => {
        if (res.statusCode != 200){
            callback(new Error(res.statusCode));
        }
        else{

            let body = '';
            res
                .on('data', (chunk) => body += chunk)
                .on('end', () => {
                    try {
                        body = JSON.parse(body);
                        callback(null, body);
                    } catch (e) {
                        callback(e);
                    }
                });
        }
    });

    req.on('error', (err) => callback(err));
    req.write('grant_type=client_credentials');
    req.end();
};
