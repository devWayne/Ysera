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
        var user = new User(_user);
        user =
            yield user.save();
         this.session.userinfo = {}
	 this.session.userinfo.nickname=_user.nickname;
    } catch (err) {
        this.throw(err);
    }
    this.status = 200;
    this.body = {
        user: user
    };
};


exports.getUser = function*() {
    try {
    	var user = yield User.findOne(this.request.body).exec();
    } catch (err) {
    	this.throw(err);
    }
}
