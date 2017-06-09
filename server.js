var express = require('express');
var app = express();
var http = require('http');
var repo = require('./repo.js');

 
app.get('/repo', repo.getTeams);

var port = Number(process.env.PORT || 3000);

app.listen(port, function(){
	console.log('server listening on port 3000');
});

