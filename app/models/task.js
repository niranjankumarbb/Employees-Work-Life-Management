const mongoose = require('mongoose')
const Schema = mongoose.Schema
const taskSchema = new Schema({
    activities : {
        type: String,
        required: true,
        enum: ['personal_life', 'work', 'weekend']
    },
    title : {
        type : String,
        minlength : [3,'title should be more than 3 characters'],
        required : true
    },
    description : {
        type : String
    },
    date : {
        type: Date,
        required: true
    },
    target: {
        type: String,
        required: true
    },
    completed : {
        type : Boolean,         
        default : false
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    organization: {
        type: String,
        required: true
     },
    user  : {
        type : Schema.Types.ObjectId,
        ref  : 'User',
        required : true
    }
})
 
const Task = mongoose.model('Task', taskSchema)
module.exports = Task

 