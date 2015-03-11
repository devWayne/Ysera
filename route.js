var authCtrl = require('./controllers/auth');
var userCtrl= require('./controllers/users');


module.exports = function(app) {

    //User
    app.all('/login', authCtrl.login);
    app.all('/logout', authCtrl.logout);
    app.all('/msgList', function*() {

        this.body = {
            msglist: [{
                "author": "Pete Hunt",
                "text": "Hey there!"
            }]
        };
        this.status = 200;
    });


    //User management
    app.post('/createuser',userCtrl.createUser);
    app.post('/getuser',userCtrl.getUser);

}
