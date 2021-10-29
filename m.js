const express = require('express')

const app = express()
const port = process.env.PORT || 8002
require('./conn/db')


const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyparser.json())
app.set("view engine", "ejs")


app.use("/",require('./controller/route'))
app.use('/a/',require('./controller/social'))

app.listen(port,()=>{
    console.log(`running ${port}`);
})
