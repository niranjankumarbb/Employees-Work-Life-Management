const User = require('../models/user')
const Profile = require('../models/profile')
 const jwt = require('jsonwebtoken')

const authenticateUserProfile= (req,res,next)=> {
console.log('token value at backend in authenticateUserProfile',req.header('Authorization'))
console.log('req.body value at backend in authenticateUserProfile',req.body)

    const token = req.header('Authorization').split(' ')[1]
    if(token){
       // console.log('token found')
        let tokenData
        try {
           tokenData= jwt.verify(token, 'dct123')
           console.log('tokenData',tokenData)
             User.findById(tokenData._id)
             .then((user)=>{
                req.user = user
                console.log('user', user)
                Profile.findOne({user:user._id})
                .then((profile)=>{
                    req.profile=profile
                    console.log('profile info in authentication1', req.profile)
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
