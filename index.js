const express= require('express')
 const app = express()
 const port = 3012

//setup db
const configuredb = require('./config/database')
configuredb()
  
//enable express to parse json data 
app.use(express.json()) 
app.use(function(req,res,next){
    console.log(`${req.ip} - ${req.method} - ${req.url} - ${new Date()} - ${JSON.stringify(req.body)}`)
    next()
})

//setup routes
 const routes = require('./config/routes')
 app.use('/',routes)
 
app.listen(port,()=>{
    console.log('Listening on port', port)
})     