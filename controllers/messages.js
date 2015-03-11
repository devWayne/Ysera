var User = require("mongoose").model("Msg");


var Validate = require('./validate');


exports.createUser = function*() {
};


exports.createMsg = function*() {
    try {
    	var user = yield User.findOne().exec();
	this.body=user;
    } catch (err) {
    	this.throw(err);
    }
}


exports.deleteMsg =function* (){

}
exports.updateMsg =function* (){

}

exports.selectMsg =function* (){

}


