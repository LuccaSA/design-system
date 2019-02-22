const express = require('express');
const request = require('request');
const dotenv = require('dotenv');
dotenv.config();


const app = express();
const port = process.env.PORT || 3000,
	host = process.env.HOST || 'localhost',
	apiKey = process.env.API_KEY,
	apiUrl = process.env.API_URL;

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use('/', function(req, res) {
	req.header("Authorization", `Lucca application=${apiKey}`);
	req.pipe(request({
		url: apiUrl + req.url,
		headers: {
			'Authorization': `Lucca application=${apiKey}`
		}
	})).pipe(res);
});

app.listen(port, host);