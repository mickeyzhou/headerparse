var express = require('express');
var app = express();
app.get('/', function(req, res){
    res.send('hello');    
});

app.get('/api/whoami', function(req, res){
   res.send({
       ipaddress: req.ip,
       language: req.get('Accept-Language'),
       software: req.get('User-Agent')
   });     
});

app.listen(process.env.PORT || 8080);