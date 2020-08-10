const Profile = require('../models/profile')
  const profileController = {}

 profileController.alllist = (req, res) => {
    Profile.find({organization : req.profile.organization})                            
        .then((profiles) =>{
            res.json(profiles)
        })
        .catch((err) => {
            res.json(err)
        })  
}
 
// get particular profile
profileController.list = (req, res) => {
    Profile.find({user : req.user._id})                            
        .then((profile) =>{
            res.json(profile)
        })
        .catch((err) => {
            res.json(err)
        })  
}

profileController.create = (req,res)=>{
   // console.log('entered profile controllerpost method')
    const body = req.body
    const profile= new Profile(body)
    profile.user = req.user._id
    profile.save( )
    .then((profile)=>{
        res.json(profile)
    })
    .catch((err)=>{
        res.json(err)
    })
 }

 profileController.show= (req,res)=>{
     //console.log('entered profileController show')
     const id = req.params.id
     Profile.find ({_id:id, user : req.user._id})
     .then((profile)=>{
         console.log('backend profile info', profile)
         if(profile){
           res.json(profile)
         }else {
             res.json({})
         }
     })
     .catch((err)=>{
                 res.json(err)

     })
 }


 profileController.update = (req,res)=>{
     const id = req.params.id
     const body = req.body
    // console.log('inside profileController update')
      Profile.findOneAndUpdate({_id:id, user : req.user._id},body, {new : true, runValidators : true})
     .then((profile)=>{
         //console.log('after updating in db response is',profile)
         if(profile){
            res.json([profile])
         } else {
             res.json({})
         }
     })
     .catch((err)=>{
        res.json(err)

     })
 }


 profileController.destroy = (req,res)=>{
     const id = req.params.id
     //console.log('entered profileController destroy')
     Profile.findOneAndDelete({_id:id})
     .then((profile)=>{
         if(profile){
             res.json([profile])
         } else {
             res.json({})
         }
     })
     .catch((err)=>{
         res.json(err)
     })
 }


 
 module.exports = profileController
