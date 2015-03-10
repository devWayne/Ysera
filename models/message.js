/**
 * Module dependencies.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


//var User = mongoose.model("User");

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
    comments: [{
    body: { type : String, default : '' },
    user: { type : Schema.Types.ObjectId, ref : 'User' },
    createdAt: { type : Date, default : Date.now }
    }],
    author: {
        type:mongoose.Schema.Types.ObjectId, 
    	ref: 'User',
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

MsgSchema.methods = {

};

mongoose.model('Msg', MsgSchema);
