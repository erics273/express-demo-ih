var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//default route: renders views/index.ejs
app.get('/', function(req, res) {
  res.render('index', { title: 'Express Forms Demo Project', subtitle: "Supports: Express | HTTP Methods, Forms & Params" });
});

/*
 * THIS IS WHERE WE WILL BE IMPLEMENTING OUR CUSTOM ROUTES
 */



//start the express application
app.listen(process.env.PORT || '3000');
