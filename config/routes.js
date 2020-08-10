const express = require('express')
const router = express.Router()
const profileController = require('../app/controllers/profileController')
const tasksController = require('../app/controllers/tasksController')
const postsController = require('../app/controllers/postsController')
const usersController = require('../app/controllers/usersController')
const {authenticateUser} = require('../app/middlewares/authentication')
const {authenticateUserProfile} = require('../app/middlewares/authentication1')

router.post('/users/register', usersController.register) 
router.post('/users/login', usersController.login) 
router.get('/users/account',authenticateUser, usersController.account) 
router.delete('/users/logout',authenticateUser, usersController.logout) 
router.delete('/users/account/:id',authenticateUser, usersController.removeUser) 

router.get('/allprofiles',authenticateUserProfile,profileController.alllist)                 

router.post('/profile',authenticateUser, profileController.create)
router.get('/profile',authenticateUser,profileController.list)                    
router.get('/profile/:id',authenticateUser, profileController.show)
router.put('/profile/:id',authenticateUser, profileController.update)
router.delete('/profile/:id',authenticateUser, profileController.destroy)

router.get('/tasks',authenticateUserProfile,tasksController.list)                    
router.post('/tasks',authenticateUserProfile, tasksController.create)
router.put('/tasks/:id',authenticateUserProfile, tasksController.update)
router.delete('/tasks/:id',authenticateUserProfile, tasksController.destroy)

router.get('/posts',authenticateUserProfile,postsController.list)                    
router.post('/posts',authenticateUserProfile, postsController.create)
router.get('/posts/:id',authenticateUserProfile,postsController.show)                    
router.delete('/posts/:id',authenticateUserProfile, postsController.destroy)
router.post('/posts/likes/:id',authenticateUserProfile, postsController.likes)
router.post('/posts/unlikes/:id',authenticateUserProfile, postsController.unlikes)
router.post('/posts/removelikes/:id',authenticateUserProfile, postsController.removeLikes)
router.post('/posts/comment/:id',authenticateUserProfile, postsController.comment)
router.post('/post/comment/:id',authenticateUserProfile, postsController.destroyComment)
 
module.exports = router