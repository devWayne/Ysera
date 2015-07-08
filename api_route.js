var authApi = require('./api/auth');
var userApi = require('./api/users');
var msgApi = require('./api/messages');
var cmtApi = require('./api/comments');

module.exports = function(app) {

    //Auth
    //app.all('/login', authApi.login);
    app.all('/api/logout', authApi.logout);


    //Message List
    app.all('/api/listmsg', msgApi.listMsg);



    //User management
    app.post('/api/createuser', userApi.createUser);
    app.post('/api/getuser', userApi.getUser);

    //Auth
    app.all('/api/login', userApi.loginUser);
    app.all('/api/logout', authApi.logout);


    //Message management
    app.post('/api/createmsg',msgApi.createMsg);
    app.get('/api/deletemsg', msgApi.deleteMsg);
    app.post('/api/updatemsg', msgApi.updateMsg);
    app.post('/api/selectmsg', msgApi.selectMsg);
    
    app.post('/api/uploadimg', msgApi.uploadImg);

    //Comment management
    app.all('/api/createcmt',cmtApi.createCmt);	
    app.all('/api/deletecmt',cmtApi.deleteCmt);	
    app.all('/api/updatecmt',cmtApi.updateCmt);	
    app.all('/api/selectcmt',cmtApi.selectCmt);	

}
