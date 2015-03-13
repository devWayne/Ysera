var Msg = require("mongoose").model("Msg");


var Validate = require('./validate');

exports.listMsg = function*() {
    try {
        var msg = yield Msg.find({}).populate('author').limit(20).exec();
    } catch (err) {
        this.throw(err);
    }
    this.status = 200;
    this.body = {
        msg: msg
    }
}

exports.createMsg = function*() {
    var _msg = {};
    _msg.content = this.request.body.content;
    _msg.author = this.session.usr._id;
    try {
        var msg =
            yield Msg.create(_msg);
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
        var msg =
            yield Msg.findOne().exec();
        this.body = user;
    } catch (err) {
        this.throw(err);
    }
    this.status = 200;
    this.body = {
        msg: msg
    }
}
