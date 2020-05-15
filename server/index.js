const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./schema')

const app = express()

//mongo
mongoose.connect('mongodb+srv://abdul:sayed4747@cluster0-4mu3w.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(res => console.log(' connected success'))
    .catch(err => console.log(err, ' error'))


app.use(cors())
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


// const data = [
//     { name: 'Ram', age: 21},
//     { name: 'Shyam', age: 31},
//     { name: 'Karan', age: 41}
// ] 

app.get('/data', (req, res) => {
    
    User.find({})
        .then(data => res.json(data))
        .catch(err => console.log(err, ' errrr'))
    
})

app.post('/upload', (req, res) => {
    const { name, email, password, photo } = req.body
    // const { fileData } = req.file

    const newUser = new User({ name, email, password, photo })

    newUser.save()
        .then(res => console.log(res, ' resss'))
        .catch(err => console.log(err, ' errr'))
})


app.listen(5000, () => console.log(' running on 5000'))