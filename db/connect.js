var mongoose = require('mongoose');

//global.environment = 'test';

var env = require('./environment');
var config = require('./config');
mongoose.connect(config[env].url);
//mongoose.connection.on('connected', function(){
//	console.log('connected to',config[env].url )
//});