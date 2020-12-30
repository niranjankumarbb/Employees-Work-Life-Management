const mongoose = require('mongoose')
const validator = require('validator')
 
const Schema = mongoose.Schema
const userSchema = new Schema({
     username : {
         type : String,
         required : true,
         minlength : [2, 'Too short'],
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
         minlength : [2, 'Too short'],
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
module.exports = User 