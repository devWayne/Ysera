var config = require('../config');

var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = config.crypto_password;

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

function userValidate(body) {
    if (!body) {
        return "The body is empty";
    }
    if (!body.username) {
        return "Missing username";
    } 
    if (!body.password) {
	return "Missing password";
    }
}

exports.encrypt = encrypt;

exports.decrypt = decrypt;

exports.userValidate= userValidate;
