var User = require("mongoose").model("User");


var Validate = require('./validate');

/**
 * Create a User
 */
exports.createUser = function*() {
    if (Validate.userValidate(this.request.body)) {
        this.throw(Validate.userValidate(this.request.body),400);
    } else {
	var _user={};
	_user.nickname=this.body.nickname;
        _user.hashed_password = Validate.encrypt(this.request.body.password);
	_user.email=this.body.email;
	_user.username=this.body.username;
    }
    try {
        var user = new User(_user);
        user =
            yield user.save();
	this.session.nickname=user.nickname;
    } catch (err) {
        this.throw(err);
    }
    this.status = 200;
    this.body = {
        user: user
    };
};


exports.readInfo = function*() {

	
}
