var koa = require('koa');
var logger = require('koa-logger');
var router = require('koa-router');
var parse = require('co-body');
var mongoose = require('mongoose');
var koaStatic = require("koa-static");
var views = require("co-views");
var bodyParser = require("koa-bodyparser");
var json = require('koa-json');

var fs=require("fs");

var config = require('./config');
var authController = require('./controllers/auth');


/**
 * Connect to database
 */
mongoose.connect(config.mongodbUrl);
mongoose.connection.on('error', function(err) {
    console.log(err);
});

/**
 * Load the models
 */
var models_path = __dirname + '/models';
fs.readdirSync(models_path).forEach(function (file) {
  if (~file.indexOf('js')) {
    require(models_path + '/' + file);
  }
});

var app = koa();

// Middleware
app.use(logger());
app.use(json());
app.use(koaStatic(__dirname + "/public"));
app.use(bodyParser());
app.use(router(app));

// Routes
require('./route')(app);

// response
/*
app.use(function *(){
  this.body = 'Hello World';
});
*/
app.listen(3000);
