const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
	const d = new Date();
	console.log(d + ' Request Type:', req.method + ' ' + req.path)
	next();
});
app.use(express.static(__dirname));
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/Hello.html");
});

app.get('/about', (req, res) => {
	res.send('There is no page about us yet')
});
app.get('/google', (req, res) => {
	res.send('<a href="https://www.google.com"> Google </a>')
});
h = '127.0.0.1'
const server = app.listen(3000, h, function () {
	const host = server.address().address;
	const port = server.address().port;
	console.log('Server is listening at https://%s:%s', host, port);
});
