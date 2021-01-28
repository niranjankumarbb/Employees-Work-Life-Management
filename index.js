const express= require('express')
const app = express()
const path = require('path') 
const port =  process.env.PORT || 3012

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
 
 if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));
}
app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port,()=>{
    console.log('Listening on port', port)
})     