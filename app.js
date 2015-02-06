var koa = require('koa');
var logger = require('koa-logger');
var router = require('koa-router');
var parse = require('co-body');
var mongoose = require('mongoose');

var config=require('./config');

var app = koa();

// x-response-time

app.use(router(app));

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});

// logger

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});


/**
 * Connect to database
 */
mongoose.connect(config.mongodbUrl);
mongoose.connection.on('error', function (err) {
  console.log(err);
});

// Routes
require('./route')(app);

// response

app.use(function *(){
  this.body = 'Hello World';
});

app.listen(3000);
