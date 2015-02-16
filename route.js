
var authController = require('./controllers/auth');


module.exports=function(app){
	
	//User
	app.all('/login',authController.login);
	app.all('/logout',authController.logout);

}
