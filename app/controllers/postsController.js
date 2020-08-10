   const Post = require('../models/post')
   const postsController = {}
 
    // get all posts
    postsController.list = (req, res) => {
    Post.find({organization : req.profile.organization})                            
    .then((posts) =>{
        res.json(posts)
    })
    .catch((err) => {
        res.json(err)
    })  
    }
       

    postsController.create = (req,res)=>{
    const body = req.body
    const post= new Post()
    post.user = req.user._id
    post.organization=req.profile.organization
    post.name= req.body.name
    post.text= req.body.text
    post.avatar= req.profile.avatar
    post.save( )
    .then((posts)=>{
        res.json(posts)
    })
    .catch((err)=>{
        res.json(err)
    })
    }


    postsController.show= (req,res)=>{
    const id = req.params.id
    Post.find ({_id:id, organization : req.profile.organization})
    .then((post)=>{
        if(post){
        res.json(post)
        }else {
            res.json({})
        }
    })
    .catch((err)=>{
                res.json(err)

    })
    }


    postsController.destroy = (req,res)=>{
    const id = req.params.id
    Post.findOneAndDelete({_id:id, user : req.user._id})
    .then((post)=>{
        if(post){
            res.json(post)
        } else {
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })
    }


    postsController.likes = (req,res)=>{
    const id=req.params.id
    Post.findById(id)
    .then(post=>{
        if(post.likes.filter(like => like.user.toString() === req.user.id).length >0){
            return res.status(400).json({alreadyliked:"User already liked this post"});
        }
    
        // Add user id to likes array
    post.likes.unshift({user:req.user.id});
        post.save()
        .then(post =>{
            res.json(post)});
    })
    .catch( err=>{
        res.json(err)
    });
    }


    postsController.unlikes = (req,res)=>{
    const id=req.params.id
    Post.findById(id)
    .then(post=>{
        if(post.unlikes.filter(unlike => unlike.user.toString() === req.user.id).length >0){
            return res.status(400).json({alreadyunliked:"User already unliked this post"});
        }
      
        // Add user id to unlikes array
       post.unlikes.unshift({user:req.user.id});
        post.save()
        .then(post =>{
             res.json(post)});
    })
    .catch( err=>{
        res.json(err)
    });
    }


    postsController.removeLikes = (req,res)=>{
    Post.findById(req.params.id)
    .then(post=>{
        if(post.likes.filter(like => like.user.toString() === req.user.id).length === 0){
            return res.status(400).json({notliked:"you have not liked this post"});
        }
        
        // Remove user id to likes array
        const removeIndex=post.likes
        .map(item=>item.user.toString())
        .indexOf(req.user._id);
        //splice out of array
        post.likes.splice(removeIndex,1);

        post.save()
        .then(post => res.json(post));
    })
    .catch( err=>{
        res.json(err)
    });     
    }

 
   postsController.comment= (req,res)=>{
   const id=req.params.id
    Post.findById( id)
    .then(post =>{
        const newComment={
            text: req.body.text,
            name: req.user.username,
            avatar: req.body.avatar,
            user:  req.user.id
        }
        // Add to comment array
        post.comments.unshift(newComment);
        // save
        post.save()
        .then(post => res.json(post))
    })
    .catch(err => {
        res.json(err)
    })   
    } 


   postsController.destroyComment= (req,res)=>{
   const id=req.params.id
    const commentId= req.body.commentId
    Post.findById(id)
    .then(post =>{
     
       // console.log('postsController.destroyComment post response value', post )
        // check comment exists
        if(post.comments.filter(comment => comment._id.toString()==commentId).length === 0){
            return res.status(404).json({msg:'Comment not exits'});
        }
        //Remove Index
        const removeIndex=post.comments
        .map(item => item._id.toString())
        .indexOf(commentId);

        
        // splice cmment out of array
        post.comments.splice(removeIndex,1);

         // save
        post.save().then(post => res.json(post))
    })
    .catch(err => {
        res.json(err)
    })
    }
  
 module.exports = postsController
