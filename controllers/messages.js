var Msg = require("mongoose").model("Msg");


var Validate = require('./validate');



exports.createMsg = function*() {
    try {
        var msg =
            yield Msg.create(this.request.body);
    } catch (err) {
        this.throw(err);
    }
    this.status = 200;
    this.body = {
        msg: msg
    }
}


exports.deleteMsg = function*() {
    try {
        var msg =
            yield Msg.remove(this.request.body);
    } catch (err) {
        this.throw(err);
    }
    this.status = 200;

}

exports.updateMsg = function*() {
    try {
        var msg =
            yield Msg.findOneAndUpdate(this.request.body, update)
    } catch (err) {
        this.throw(err);
    }
    this.status = 200;
        this.body = {
        msg: msg
    }
}

exports.selectMsg = function*() {
    try {
    	var msg = yield Msg.findOne().exec();
	this.body=user;
    } catch (err) {
    	this.throw(err);
    }
    this.status = 200;
        this.body = {
        msg: msg
    }
}
