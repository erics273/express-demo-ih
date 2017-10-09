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

//route to render our form (views/user-info-form.js)
app.get('/get-user-info', (req, res) => {
  res.render('user-info-form');
});

//route that processes data from the from and displays it on the screen
app.get('/display-user-info', (req, res) => {

  //lets create some variables that hold the data submitted from the form
  //notice req.query.name. This is how we access the value of the "name" query parameter submitted by the form. 
  //we repeat this pattern for the other query parameters we want to access (age and superhero).
  let name      = req.query.name;
  let age       = req.query.age;
  let superhero = req.query.superhero;

  //here we tell the server to respond with the variables initilized above
  //ultimateley displaying the data that was sent from the form
  res.send(`
    Your name is ${name}
    Your age is ${age}
    Your favorite superhero is ${superhero}
  `)
});

//start the express application
app.listen(process.env.PORT || '3000');
