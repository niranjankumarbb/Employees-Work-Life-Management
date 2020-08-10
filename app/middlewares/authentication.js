const User = require('../models/user')
 const jwt = require('jsonwebtoken')

const authenticateUser= (req,res,next)=> {
console.log('token value at backend authenticateUser',req.header('Authorization'))
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
                console.log(user)
                next()
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
    authenticateUser
}
