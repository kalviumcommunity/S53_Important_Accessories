const mongoose = require('mongoose')

const accessorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    averageBuyPrice: {
        type: String
    },
    amazonLink: {
        type: String
    }
})

const Accessories = mongoose.model('Accessories', accessorySchema)
module.exports = Accessories