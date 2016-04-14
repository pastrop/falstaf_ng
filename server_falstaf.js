require('./db/connect');
var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes/api');

var app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', routes);

app.use('*', function(req, res) {
    res.status(404).json({ message: 'Not Found' });
}); 

app.listen(8080, function() {
    console.log('Server-Falstaf is listening on port 8080');
});

exports.app = app;