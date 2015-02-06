var router = require('koa-router');

var authController = require('./controllers/auth');

module.exports=function(app){
	app.use(router(app));

	//User
	app.post('/login',authController.login);
	app.all('/logout',authController.logout);
	

}
