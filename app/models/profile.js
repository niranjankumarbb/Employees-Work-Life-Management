const mongoose = require('mongoose')

console.log('mongoose content', mongoose)

const Schema = mongoose.Schema
const profileSchema = new Schema({
    fullname : {
        type : String,
  //   minlength : 3,
   //   minlength : [3,'title should be more than 3 characters'],
        required : true
    },
    avatar: {
       type: String
    },
    email : {
        type : String,
        required : true

    },
    age : {
        type : Number,
        required : true

    },
    gender : {
        type : String,
        required : true

    },
    mobile : {
        type : Number,
        required : true

    },
    qualification : {
        type : String,
        required : true

    },
    organization : {
        type : String,
        required : true

    },
    experience : {
        type : String,
        required : true

    },
    skills : {
        type : String,
        required : true

    },
     
    createdAt : {
        type : Date,
        default : Date.now
    },
    user  : {
        type : Schema.Types.ObjectId,
        ref  : 'User',
        required : true
    }
})


//console.log('entered notes model')

// taskSchema.pre('validate', function(next){
//     console.log('pre validate function called')
//     next()
// })

// taskSchema.pre('save', function(next){
//     console.log('pre save function called')
//     next()
// })


//console.log('taskSchema console',taskSchema)

const Profile = mongoose.model('Profile', profileSchema)
//console.log('Task model function()',Task())
module.exports = Profile

//console.log('task.js module exports', module.exports)
