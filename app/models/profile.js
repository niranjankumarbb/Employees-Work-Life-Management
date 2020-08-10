const mongoose = require('mongoose')
const Schema = mongoose.Schema
const profileSchema = new Schema({
    fullname : {
        type : String,
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
 
const Profile = mongoose.model('Profile', profileSchema)
 module.exports = Profile

 