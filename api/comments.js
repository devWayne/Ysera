var Cmt = require("mongoose").model("Cmt");


var Validate = require('./validate');


exports.createCmt = function*() {
    try {
        var cmt =
            yield Cmt.create(this.request.body);
    } catch (err) {
        this.throw(err);
    }
    this.status = 200;
    this.body = {
        cmt: cmt
    }
}


exports.deleteCmt = function*() {
    try {
        var cmt =
            yield Cmt.remove(this.request.body);
    } catch (err) {
        this.throw(err);
    }
    this.status = 200;

}

exports.updateCmt = function*() {
    try {
        var cmt =
            yield Cmt.findOneAndUpdate(this.request.body, update)
    } catch (err) {
        this.throw(err);
    }
    this.status = 200;
    this.body = {
        cmt: cmt
    }
}

exports.selectCmt = function*() {
    try {
        var cmt =
            yield Cmt.findOne().exec();
        this.body = user;
    } catch (err) {
        this.throw(err);
    }
    this.status = 200;
    this.body = {
        cmt: cmt
    }
}
