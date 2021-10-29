const express = require('express')
const route = express.Router()
const model = require('../conn/model')



route.get('/serch',(req,res)=>{
    res.render('serch')
})


route.get('/profile',(req,res)=>{
    res.render('profile')
})










module.exports = route