const mongoose = require('mongoose')

const configuredb = () => {
        mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/employee-work-life-manage', {   
            useNewUrlParser: true, 
            useUnifiedTopology: true ,
            useCreateIndex : true
        })
        .then(() => {
            console.log('connected to db')
        })
        .catch((err) => {
            console.log(err)
        })
}   
module.exports = configuredb  
 