var express = require('express');
var path = require('path');

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

//route to render our form (views/user-info-form.ejs)
app.get('/get-user-info', (req, res) => {
  res.render('user-info-form');
});

//start the express application
app.listen(process.env.PORT || '3000');
