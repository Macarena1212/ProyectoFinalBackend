const {Schema, model} = require('mongoose')

const schema = new Schema({
    nombre: {
        type: String,
        required: true, 
        unique: true
    },
    ingredientes: {
        type: String,
        required: true
    },
    graduacionAlcoholica: {
        type: Number,
        required: true
    },


})

const Trago = model('Trago', schema)      
module.exports = {Trago}

