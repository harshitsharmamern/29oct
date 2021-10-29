const express = require('express')
const route = express.Router()
const model = require('../conn/model')

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}



route.get("/", (req, res) => {
    res.render("sinup")
})

route.post("/", (req, res) => {

    const { name, pass } = req.body

    const datasave = new model({
        name, pass
    })
    datasave.save((err, da) => {
        if (err) throw err

        else {
            res.redirect('/sinin')
        }

    })

})


route.get('/sinin', (req, res) => {
    res.render('sinin')
})

var jwt = require('jsonwebtoken');

route.post('/sinin', (req, res) => {

    const { name, pass } = req.body

    model.findOne({ name: name }).then(( data) => {


            if (pass === data.pass) {

                const userid = data._id

                var token = jwt.sign({ userid: userid }, 'logintoken');

                localStorage.setItem('mytoken', token);
                localStorage.setItem('myname', name);

                res.redirect('/dash')

            }
            else{ 
                res.redirect('/')
            }
        
    })

})


route.get("/dash", (req, res) => {
    var username = localStorage.getItem('myname')
    res.render("dash", { username: username })
})



module.exports = route