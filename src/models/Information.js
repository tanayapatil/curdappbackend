const mongoose = require('mongoose')

const informationSchema = new mongoose.Schema({
    name: {
        type: String,

    },

    email: {
        type: String
    },
    message: {
        type: String
    }
    

})

module.exports = mongoose.model('informations', informationSchema)

