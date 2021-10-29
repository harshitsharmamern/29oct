const mongoose = require('mongoose')


const schema = mongoose.Schema({
    name : {
        type : String
    },
    pass : {
        type : String
    }
})

const model = mongoose.model("home", schema)

module.exports =model





