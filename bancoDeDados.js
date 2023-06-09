const mongoose = require('mongoose')

require ('dotenv').config()

//função para conectar o banco de dados, async se refere ao js assicrono
async function conectaBancoDeDados() {

    //tentativa de conexão
    try {
        console.log('Conexão com o banco de dados iniciou')

        // aqui é feita a conexão - espera e conecta com o link
        await mongoose.connect(process.env.MONGO_URL)

        console.log('Conectado com suceso')

        //caso não de certo, mostra no console o erro
    } catch (error) {
        console.log(error)
    }
}

module.exports = conectaBancoDeDados