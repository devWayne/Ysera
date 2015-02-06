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
    name: {
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

UserSchema.methods = {

};

mongoose.model('User', UserSchema);

