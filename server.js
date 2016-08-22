var express = require('express');
var mongoose = require('mongoose');
var https = require('https');
var http = require('http');
var path = require('path');
var app = express();
var bodyParser = require('body-parser')
var Contact = require('./app/models/contact');

var PORT = 3002;

app.set('views', 'app/views');
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  next();
})

/* Logging */
// app.use(morgan('dev'));

/* Require routes */
require('./routes/page')(app);

/* Require models */
require('./app/models/contact');

/* Establish Mongoose connection */
mongoose.connect('mongodb://localhost/brianvdb3');
mongoose.connection.on('open', function() {
  
  console.log('mongoose connection established');
  
  http.createServer(app).listen(PORT, function() {
    console.log('https server running on ' + PORT);
  });

});
mongoose.connection.on('error', function(err) {
  console.error('Failed to connect to MongoDB: %s', err.message);
});

/*app.listen(PORT, function () 
  console.log('listening on port ' + PORT);
});*/


// error handling
app.use(function(err, req, res, next) {
  console.log({error: err});
  res.status(err.status || 500);
  res.render('500', { error: err });
});

app.use(function(req, res, next){
  console.log(req.url);
  if (req.accepts('html')) {
    console.log(req.url);
    res.render('404', { url: req.url });
    return;
  }
  if (req.accepts('json')) {
    console.log('Not found');
    res.send({ error: 'Not found' });
    return;
  }
  res.type('txt').send('Not found');
});
