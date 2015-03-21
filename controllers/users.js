var User = require("mongoose").model("User");


var Validate = require('./validate');

/**
 * Create a User
 */
exports.createUser = function*() {
    if (Validate.userValidate(this.request.body)) {
        this.throw(Validate.userValidate(this.request.body), 400);
    } else {
        var _user = {};
        _user.nickname = this.request.body.nickname;
        _user.hashed_password = Validate.encrypt(this.request.body.password);
        _user.email = this.request.body.email;
        _user.username = this.request.body.username;
    }
    try {
        //var user = new User(_user);
        var user =
            yield User.create(_user);
        this.session.usr = user;
    } catch (err) {
        this.throw(err);
    }
    this.status = 200;
    this.body = {
        user: user
    };
};


exports.loginUser = function*() {
 //   _user.hashed_password = Validate.encrypt(this.request.body.password);
 //   _user.username = this.request.body.username;
    try {
        var user =
            yield User.findOne({
		    username:this.request.body.username
            }).exec();
    } catch (err) {
        this.throw(err);
    }
    if (user&&user.hashed_password == Validate.encrypt(this.request.body.password)) {
        this.status = 200;
        this.body = {
            user: user,
	    status:200
        };
    } else {
        this.status = 200;
        this.body = {
            status:500
        };
    }
}

exports.getUser = function*() {
    try {
        var user =
            yield User.findOne().exec();
        this.body = user;
    } catch (err) {
        this.throw(err);
    }

}
