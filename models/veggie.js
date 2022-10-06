const mongoose = require('mongoose')

const veggieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    fav: Boolean
})

const Veggie = mongoose.model('Veggie', veggieSchema)

module.exports = Veggie