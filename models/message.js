/**
 * Module dependencies.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var User = require("mongoose").model("User");

/**
 * User Schema
 */

var MsgSchema = new Schema({
    content: {
        type: String,
        trim: true,
        required: true,
        index: {
            unique: true
        }
    },
    author: {
        type: User,
        required: true
    },
    like: {
        type: Number,
        default: ''

    },
    dislike: {
        type: Number,
        default: ''

    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

/**
 * Methods
 */

XSchema.methods = {

};

mongoose.model('Msg', MsgSchema);