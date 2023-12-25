const mongoose = require('mongoose')

const alienSchema = new mongoose.Schema({

    name: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required: true 
    }

})

module.exports = mongoose.model('Alien' , alienSchema)