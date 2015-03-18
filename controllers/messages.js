var Msg = require("mongoose").model("Msg");
var parse = require('co-busboy');
var path = require('path');
var fs = require('fs');

var Validate = require('./validate');

var rand = require("random-key");

exports.uploadImg = function*() {
    // ignore non-POSTs
    if ('POST' != this.method) this.status = 404;
    // if (!this.request.is('multipart/*')) this.status = 404;
    // multipart upload
    var parts = parse(this);
    var part;
    var _ran = rand.generate();
    fs.mkdirSync(__dirname + "/../uploadimgs/" + _ran);
    while (part =
        yield parts) {
	if(!part.filename)break;
        var stream = fs.createWriteStream(__dirname + "/../uploadimgs/" + _ran + '/' + part.filename);
        part.pipe(stream);
        console.log('uploading %s -> %s', part.filename, stream.path);
    }

    this.status = 200;
    this.body = {
	 imgkey:_ran
    }
}
exports.listMsg = function*() {
    try {
        var msg =
            yield Msg.find({}).populate('author').limit(20).exec();
    } catch (err) {
        this.throw(err);
    }
    this.status = 200;
    this.body = {
        msg: msg
    }
}

exports.createMsg = function*() {
    if (!this.session.usr._id) {
        this.throw('未登录', 400);
    }
    //this.body = JSON.stringify(this.request.body);
    var _msg = {};
    _msg.content = this.request.body.content;
    _msg.imgkey = this.request.body.imgkey
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
