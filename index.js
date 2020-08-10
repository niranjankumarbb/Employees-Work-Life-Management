const express= require('express')
 const app = express()
 const port = 3012
//console.log('express() function console',express())
//console.log('express console',express)


//setup db
 const configuredb = require('./config/database')
configuredb()
console.log('configuredb() console',configuredb)

// console.log('after configuredb')

//enable express to parse json data 
app.use(express.json())
 //console.log('after express.json')
 //console.log('express.json console',  express.json())

app.use(function(req,res,next){
    console.log(`${req.ip} - ${req.method} - ${req.url} - ${new Date()} - ${JSON.stringify(req.body)}`)
    next()
})



//setup routes
 const routes = require('./config/routes')
// console.log('before app.use / routes')
app.use('/',routes)
// console.log('after app.use / routes')


app.listen(port,()=>{
    console.log('Listening on port', port)
})     