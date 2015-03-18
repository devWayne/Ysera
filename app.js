var koa = require('koa');
var logger = require('koa-logger');
var router = require('koa-router');
var parse = require('co-body');
var mongoose = require('mongoose');
var koaStatic = require("koa-static");
var views = require("co-views");
var bodyParser = require("koa-bodyparser");
var json = require('koa-json');
var session = require('koa-session');

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
    require(models_path + '/user.js');
    require(models_path + '/message.js');
    require(models_path + '/comment.js');




var app = koa();

// Middleware
app.use(logger());
app.use(json());
app.keys = ['some secret hurr'];
app.use(session(app));
app.use(koaStatic(__dirname + "/public"));
app.use(bodyParser());
app.use(router(app));

// Routes
require('./route')(app);

app.listen(3000);
