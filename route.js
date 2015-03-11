var authCtrl = require('./controllers/auth');
var userCtrl= require('./controllers/users');
var msgCtrl=require('./controllers/messages');


module.exports = function(app) {

    //Auth
    app.all('/login', authCtrl.login);
    app.all('/logout', authCtrl.logout);

    //Message List
    app.all('/msglist', function*() {

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
	
    //Message management
    app.post('/createmsg',msgCtrl.createMsg);
    app.get('/deletemsg',msgCtrl.deleteMsg);
    app.post('/updatemsg',msgCtrl.updateMsg);
    app.post('/selectmsg',msgCtrl.selectMsg);
	
    //Comment management
    
}
