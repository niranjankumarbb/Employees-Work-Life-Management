const User = require('../models/user.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const usersController = {}

usersController.register = (req,res)=>{
    console.log('entered usersController register')
    const body = req.body
    const user = new User(body)
    bcrypt.genSalt()
    .then(salt=>{
        console.log('salt',salt)
       bcrypt.hash(user.password,salt)
       // console.log('hash value generated')
         .then((encrypted)=>{
             user.password = encrypted
             console.log('encrypted password', user.password)
             user.save()
              .then((user)=>{
                  res.json(user)
               })
              .catch(err=>{
                  res.json(err)
              })
         })
         .catch(err=>{
             res.json(err)
         })
    })
    .catch(err=>{
        res.json(err)
    })
 }

usersController.login = function(req,res){
    const body = req.body
    const secretKey = 'dct123'
    User.findOne({email : body.email })
    .then((user)=>{
        if(!user){
            res.json('Invalid email or password')
        }
        bcrypt.compare(body.password, user.password)
         .then(match=>{
              if(match){
                  const tokenData = {
                            _id : user._id,
                      username : user.username,
                         email : user.email     
                  }
                const token= jwt.sign(tokenData,  secretKey, {expiresIn : '364d'})
                  if(token){
                      console.log('JWT value at backend',  `Bearer ${token}`)
                      User.findByIdAndUpdate(user._id,{$inc: {loginCount:1}}, {new:true})
                      .then((user)=>{
                        res.json({
                            token : `Bearer ${token}`
                          })
                      })
                     
                     
                  }else {
                      res.json({
                          error : 'Invalid email or password'
                      })
                  }

              }
         })
    })
    .catch((err)=>{ 
        res.json(err)
    })

}

usersController.logout = (req,res)=>{
    res.json('deleted')

        //  User.findOneAndDelete({_id: req.user._id})
        // .then((user)=>{
        //     console.log('deleted user details', user)
        //     if(user){
        //         res.json(user)
        //     } else {
        //         res.json({})
        //     }
        // })
        // .catch((err)=>{
        //     res.json(err)
        // })
    }

    usersController.removeUser = (req,res)=>{
        const id = req.params.id
        console.log('entered userController removeUser')
        User.findByIdAndDelete(id)
        .then((user)=>{
            if(user){
                res.json(user)
            } else {
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
    }


usersController.account = (req,res)=>{
    //  const user = req.user
     res.json(req.user)
}


module.exports = usersController