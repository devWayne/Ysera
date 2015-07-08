var Msg = require("mongoose").model("Msg");

exports.renderMsg = function*() {
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

