/**
 * Module dependencies.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var oAuthTypes = [
    'github',
    'google'
];

/**
 * User Schema
 */

var UserSchema = new Schema({
    nickname: {
        type: String,
        trim: true,
        required: true,
        index: {
            unique: true
        }

    },
    email: {
        type: String,
        trim: true,
        required: true,
        index: {
            unique: true
        }
    },
    username: {
        type: String,
        trim: true,
        required: true,
        index: {
            unique: true
        }
    },
    hashed_password: {
        type: String,
        trim: true,
        required: true,
        index: {
            unique: true
        }
    },
    authToken: {
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    github: {},
    google: {}
});

/**
 * Methods
 */
UserSchema.methods.comparePassword = function*(candidatePassword) {
    //return yield bcrypt.compare(candidatePassword, this.password);
};

/**
 * Statics
 */

UserSchema.statics.passwordMatches = function*(username, password) {
    var user =
        yield this.findOne({
            'username': username.toLowerCase()
        }).exec();
    if (!user) throw new Error('User not found');

    if (
        yield user.comparePassword(password)) {
        return user;
    }

    throw new Error('Password does not match');
};
mongoose.model('User', UserSchema);
