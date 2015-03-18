var Msg = require("mongoose").model("Msg");
var parse = require('co-busboy');
var path = require('path');
var fs = require('fs');

var Validate = require('./validate');


exports.uploadImg = function*() {
    // ignore non-POSTs
    if ('POST' != this.method) this.status = 404;
   // if (!this.request.is('multipart/*')) this.status = 404;
        this.status = 200;
    this.body = {
        msg: 'upload succeed'
    }

    // multipart upload
    var parts = parse(this);
    var part;

    while (part =
        yield parts) {
        var stream = fs.createWriteStream(__dirname + "/uploadimgs/" + part.filename);
        part.pipe(stream);
        console.log('uploading %s -> %s', part.filename, stream.path);
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
    this.body = JSON.stringify(this.request.body);
    var _msg = {};
    _msg.content = this.request.body.fields.content;
    _msg.author = this.session.usr._id;
    try {
        var msg =
            yield Msg.create(_msg);
    } catch (err) {
        this.throw(err);
    }

    // ignore non-POSTs
    if ('POST' != this.method) this.status = 404;
    if (!this.request.is('multipart/*')) this.status = 404;

    // multipart upload
    try {
        var parts = parse(this);
        var part;

        while (part =
            yield parts) {
            var stream = fs.createWriteStream(__dirname + "/uploadimgs/" + msg._id + '/' + part.filename);
            part.pipe(stream);
            console.log('uploading %s -> %s', part.filename, stream.path);
        }
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
