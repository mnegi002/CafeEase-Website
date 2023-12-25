const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://mayank:mayank2002@food.tkv1g9r.mongodb.net/'

const app = express()
mongoose.connect( url , {useNewUrlParser:true})


app.use(express.json())
const alienRouter = require('./routes/aliens')
app.use('/aliens' , alienRouter)

const con = mongoose.connection
con.on('open', () => {
    console.log('connected...')
    app.listen(9000 , () => {
        console.log('server running')
    })
})
