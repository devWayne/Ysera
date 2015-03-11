
var parse = require('co-busboy');
var fs = require('fs');
var path = require('path');



exports.uploadImg = function*() {
    // ignore non-POSTs
    if ('POST' != this.method) return yield next;

    // multipart upload
    var parts = parse(this);
    var part;

    while (part = yield parts) {
        var stream = fs.createWriteStream(__dirname+"/uploadimgs/"+part.filename);
        part.pipe(stream);
        console.log('uploading %s -> %s', part.filename, stream.path);
    }

    this.status=200;
}
