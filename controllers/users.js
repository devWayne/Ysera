var config = require('../config');
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = config.crypto_password;

var User =require('../models/user');

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
exports.creat = function(req, res) {
    var user = new User(req.body);
    user.save(function(err) {
        if (err) return res.json({
            code: 500,
            msg: err.message
        });
        res.json({
            code: 200
        });
    });
};


