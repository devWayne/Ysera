var authCtrl = require('./controllers/auth');
var userCtrl = require('./controllers/users');
var msgCtrl = require('./controllers/messages');
var cmtCtrl = require('./controllers/comments');

module.exports = function(app) {

    //Auth
    //app.all('/login', authCtrl.login);
    app.all('/logout', authCtrl.logout);


    //Message List
    app.all('/listmsg', msgCtrl.listMsg);



    //User management
    app.post('/createuser', userCtrl.createUser);
    app.post('/getuser', userCtrl.getUser);

    //Auth
    app.all('/login', userCtrl.loginUser);
    app.all('/logout', authCtrl.logout);


    //Message management
    app.post('/createmsg',msgCtrl.createMsg);
    app.get('/deletemsg', msgCtrl.deleteMsg);
    app.post('/updatemsg', msgCtrl.updateMsg);
    app.post('/selectmsg', msgCtrl.selectMsg);
    
    app.post('/uploadimg', msgCtrl.uploadImg);

    //Comment management
    app.all('/createcmt',cmtCtrl.createCmt);	
    app.all('/deletecmt',cmtCtrl.deleteCmt);	
    app.all('/updatecmt',cmtCtrl.updateCmt);	
    app.all('/selectcmt',cmtCtrl.selectCmt);	

}
