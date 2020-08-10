const mongoose = require('mongoose')

console.log('mongoose content', mongoose)

const Schema = mongoose.Schema
const taskSchema = new Schema({
    activities : {
        type: String,
        required: true,
        enum: ['personal_life', 'work', 'weekend']
    },
    title : {
        type : String,
  //   minlength : 3,
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


//console.log('entered notes model')
 
//console.log('taskSchema console',taskSchema)

const Task = mongoose.model('Task', taskSchema)
//console.log('Task model function()',Task())
module.exports = Task

//console.log('task.js module exports', module.exports)
