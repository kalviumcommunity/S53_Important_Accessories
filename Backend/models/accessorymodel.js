const mongoose = require('mongoose')

const accessorySchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name:{
        type: String,
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