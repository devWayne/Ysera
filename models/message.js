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
    },
    comments: [{
        type:mongoose.Schema.Types.ObjectId, 
    	ref: 'Cmt'
    }],
    author: {
        type:mongoose.Schema.Types.ObjectId, 
    	ref: 'User',
        required: true
    },
    like: {
        type: Number,
        default: 0

    },
    dislike: {
        type: Number,
        default: 0

    },
    imgkey:{
        type: String,
	trim: true,
	required: true
    },
    imgfilename:[{
    	type: String,
	trim: true
    }],
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
