const User = require('../models/user')
const Profile = require('../models/profile')
 const jwt = require('jsonwebtoken')

const authenticateUserProfile= (req,res,next)=> {
    const token = req.header('Authorization').split(' ')[1]
    if(token){
        let tokenData
        try {
           tokenData= jwt.verify(token, 'dct123')
              User.findById(tokenData._id)
             .then((user)=>{
                req.user = user
                console.log('user', user)
                Profile.findOne({user:user._id})
                .then((profile)=>{
                    req.profile=profile
                    next()
                })
                .catch(err=>{
                    res.json(err)
                })
             })

             .catch(err=>{
                 res.json(err)
             })
    
        } catch(e){
            res.json(e.message)
        }
    }
 }

module.exports = {
    authenticateUserProfile
}
