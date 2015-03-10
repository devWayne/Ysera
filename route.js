var authController = require('./controllers/auth');
var userCtrl= require('./controllers/users');


module.exports = function(app) {

    //User
    app.all('/login', authController.login);
    app.all('/logout', authController.logout);
    app.all('/XList', function*() {

        this.body = {
            Xlist: [{
                "author": "Pete Hunt",
                "text": "Hey there!"
            }]
        };
        this.status = 200;
    });
    app.post('/create',userCtrl.createUser);

}
