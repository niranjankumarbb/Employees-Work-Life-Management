const mongoose = require('mongoose')
const validator = require('validator')
// const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema
const userSchema = new Schema({
     username : {
         type : String,
         required : true,
         minlength : [6, 'Too short'],
         maxlength : [64, 'Too Long'],
         unique : true

     },
     email : {
         type : String,
         required : true,
         validate : {
             validator : function(value){
                 return validator.isEmail(value)
             },
             message : function(){
                 return 'Email validation failed'
             }
         },
         unique : true
     },
     password : {
         type : String,
         required : true,
         minlength : [8, 'Too short'],
         maxlength : [64, 'Too Long']
     },
     role : {
        type: String,
        required : true
     },

     loginCount  :{
        type : Number,
        default: 0
        
    }
})


const User = mongoose.model('User', userSchema)

// userSchema.pre('save', )

module.exports = User 