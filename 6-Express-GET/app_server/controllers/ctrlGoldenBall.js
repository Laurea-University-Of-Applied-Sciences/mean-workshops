const request = require('request');
const apiURL = require('./apiURLs');

const winnerlist = function(req, res){

    const path = '/api/goldenball';
    const requestOptions = {
        url : apiURL.server + path,
        method : 'GET',
        json : {},
        qs : {}
    };

    request(
        requestOptions,
        function (err, response, body){
            if (err){
                res.render('error', {message: err.message});
            }
            else if (response.statusCode != 200){
                res.render('error', {message: 'Error accessing API: ' + response.statusMessage + " ("+ response.statusCode + ")" });
            }
            else if (!(body instanceof Array)) {
                res.render('error', {message: 'Unexpected response data'});
            }
            else if (!body.length){
                res.render('error', {message: 'No documents in collection'});
            }
            else {
                res.render('goldenball', {winners: body});
            }
        }
    );
};

module.exports = {
    winnerlist
};