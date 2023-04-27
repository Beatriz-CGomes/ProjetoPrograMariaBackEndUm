const mongoose = require('mongoose')

//função para conectar o banco de dados, async se refere ao js assicrono
async function conectaBancoDeDados() {

    //tentativa de conexão
    try {
        console.log('Conexão com o banco de dados iniciou')

        // aqui é feita a conexão - espera e conecta com o link
        await mongoose.connect('mongodb+srv://beatrizcunha:iyHP7C9PQxi9G9ay@clustermulheres.lnfmnyn.mongodb.net/?retryWrites=true&w=majority')

        console.log('Conectado com suceso')

        //caso não de certo, mostra no console o erro
    } catch (error) {
        console.log(error)
    }
}

module.exports = conectaBancoDeDados