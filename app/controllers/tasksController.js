const Task = require('../models/task')
const tasksController = {}
 
 // get all categories
 tasksController.list = (req, res) => {
    Task.find({user : req.user._id})                            
        .then((task) =>{
            res.json(task)
        })
        .catch((err) => {
            res.json(err)
        })  
 }


 tasksController.create = (req,res)=>{
    const body = req.body
    const task= new Task(body)
    task.user = req.user._id
    task.organization=req.profile.organization
    console.log('task before saving', task)
    task.save( )
    .then((tasks)=>{
        res.json(tasks)
    })
    .catch((err)=>{
        res.json(err)
    })
 }

    
 tasksController.update = (req,res)=>{
     const id = req.params.id
     const body = req.body
     Task.findOneAndUpdate({_id:id, user : req.user._id},body, {new : true, runValidators : true})
     .then((task)=>{
         console.log('after updating in db response is',task)
         if(task){
            res.json(task)
         } else {
             res.json({})
         }
     })
     .catch((err)=>{
        res.json(err)

     })
 }


 tasksController.destroy = (req,res)=>{
     const id = req.params.id
     Task.findOneAndDelete({_id:id, user : req.user._id})
     .then((task)=>{
         if(task){
             res.json(task)
         } else {
             res.json({})
         }
     })
     .catch((err)=>{
         res.json(err)
     })
 }


 module.exports = tasksController
