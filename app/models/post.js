const mongoose=require('mongoose');
const Schema = mongoose.Schema;

// create schema
const PostSchema=new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    text:{
        type: String,
        required: true
    },
    name:{
        type: String
    },
    avatar:{
        type: String
    },
    // array of objects to get id for each like
    likes:[
        {
            user:{
                type: Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ],
    unlikes:[
        {
            user:{
                type: Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ],
    comments:[
        {
            user:{
                type: Schema.Types.ObjectId,
                ref: 'users'
            },
            text:{
                type: String,
                required: true
            },
            name:{
                type: String
            },
            avatar:{
                type: String
            },
            date:{
                type: Date,
                default: Date.now()
            }
        }
    ],
    date:{
        type:Date,
        default: Date.now()
    },
    organization:{
        type: String,

    }
});

const Post=mongoose.model('post', PostSchema);
module.exports=Post  

