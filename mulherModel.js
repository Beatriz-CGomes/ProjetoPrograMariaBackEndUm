const mongoose = require('mongoose')

//A regra do objeto mulher
const mulhereSchema = new mongoose.Schema({
    nome: {
        //para saber se é obrigatoria e o tipo
        type: String,
        required: true
    },

    imagem: {
        type: String,
        required: true,
    },

    citacao: {
        type: String,
        required: true
    },
    minibio: {
        type: String,
        required: true
    }
})

// para ficar disponivel em outros arquivos, definimos o modelo e a informação passada lá no mongodb
module.exports = mongoose.model('diva', mulhereSchema)