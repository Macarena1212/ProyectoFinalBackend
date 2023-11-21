const {Schema, model} = require('mongoose')

const schema = new Schema({
    Nombre: {
        type: String,
        required: true, 
        unique: true
    },
    Ingredientes: {
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

