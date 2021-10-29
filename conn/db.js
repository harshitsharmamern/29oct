const mongoose = require('mongoose')

const db = "mongodb://localhost:27017/29oct"

mongoose.connect(db, {
    useNewUrlParser:true,
    useUnifiedTopology : true,
    useCreateIndex : true
}).then((data)=>{console.log('database success');}).catch((e)=>{console.log(e);})



module.exports =mongoose





