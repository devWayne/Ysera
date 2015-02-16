var config = require('../config');
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = config.crypto_password;

var User = require("mongoose").model("User");

function encrypt(text) {
    var cipher = crypto.createCipher(algorithm, password)
    var crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;
}

function decrypt(text) {
    var decipher = crypto.createDecipher(algorithm, password)
    var dec = decipher.update(text, 'hex', 'utf8')
    dec += decipher.final('utf8');
    return dec;
}


/**
 * Create a User
 */
exports.creat = function *() {
    var user = new User(req.body);
    user =yield user.save(function(err) {
    });
};


