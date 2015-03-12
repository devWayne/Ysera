/**
 * Module dependencies.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;



/**
 * Comment Schema
 */

var CmtSchema = new Schema({
    content: {
        type: String,
        trim: true,
        required: true,
        index: {
            unique: true
        }
    },
    author: {
        type:mongoose.Schema.Types.ObjectId, 
    	ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

/**
 * Methods
 */

CmtSchema.methods = {

};

mongoose.model('Cmt', CmtSchema);

