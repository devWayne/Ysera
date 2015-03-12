var authCtrl = require('./controllers/auth');
var userCtrl = require('./controllers/users');
var msgCtrl = require('./controllers/messages');
var cmtCtrl = require('./controllers/comments');


var upload = require('./utils/upload');

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
    app.post('/createuser', userCtrl.createUser);
    app.post('/getuser', userCtrl.getUser);

    //Message management
    app.post('/createmsg', msgCtrl.createMsg);
    app.get('/deletemsg', msgCtrl.deleteMsg);
    app.post('/updatemsg', msgCtrl.updateMsg);
    app.post('/selectmsg', msgCtrl.selectMsg);



    //Comment management
    app.all('/createcmt',cmtCtrl.createCmt);	
    app.all('/deletecmt',cmtCtrl.deleteCmt);	
    app.all('/updatecmt',cmtCtrl.updateCmt);	
    app.all('/selectcmt',cmtCtrl.selectCmt);	


    // Upload images
    var fs = require('fs');
    var path = require('path');

    app.post('/uploadimg', function*() {
        // ignore non-POSTs
        if ('POST' != this.method)  this.status = 404;;

        // multipart upload
        var parts = parse(this);
        var part;

        while (part =
            yield parts) {
            var stream = fs.createWriteStream(__dirname + "/uploadimgs/" + part.filename);
            part.pipe(stream);
            console.log('uploading %s -> %s', part.filename, stream.path);
        }

        this.status = 200;
    });
}
