var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('index');
});
app.get('/test', function(req, res){
  res.render('test');
});



app.listen(3000);
