var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var async = require('async');
var request = require('request');
var xml2js = require('xml2js');
var _ = require('underscore');

// Babel ES6/JSX Compiler
require('babel-register');

var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/config/routes');

var mongoose = require('mongoose');
var config = require('./server/mongoConfig');

var app = express();

mongoose.connect(config.database);
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection opened to ' + config.database);
});
// mongoose.connection.on('open', function (ref) {
//   console.log('Connected to mongo server.');
//   mongoose.connection.db.listCollections().toArray(function(err, names) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         names.forEach(function(e, i, a) {
//             console.log("--->>", e.name);
//         });
//     }
//   });
//   // var admin = {name:'admin', password:'admin'};
//   // mongoose.connection.collection('users').insert(admin);
//   // mongoose.connection.collections[].drop( function(err) {
//   //   console.log('collection dropped');
//   // });
// })
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod` ?');
});
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

app.set('port', process.env.PORT || 8001);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

var loginModule = require('./server/login/loginModule');
app.use('/auth', loginModule);

var dashboardModule = require('./server/dashboard/dashboardModule');
app.use('/dashboard', dashboardModule);

app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('server/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found');
    }
  });
});

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});