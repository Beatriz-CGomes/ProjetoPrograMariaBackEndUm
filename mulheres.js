//aqui estou iniciando o express 
const express = require('express');

// aqui estou configurando a primeira parte da rota
const router = express.Router();



//ligando o banco de dadsos ao arquivo bando de dados
const conectaBancoDeDados = require('./bancoDeDados')
conectaBancoDeDados() // aqui chamando a função que conecta o banco de dados

//trazendo o pacote cors que permite consumir essa api no front-end
const cors = require('cors')

//regra da criacao e conexao com a regra mulher
const Mulher = require('./mulherModel')

// aqui estou iniciando o app 
const app = express();
app.use(express.json()) //dizendo que estamos tratando as requisições

//liberando o cors
app.use(cors())

// aqui estou definindo a porta de acesso
const porta = 3333;



// essa função é do get para pegar a lista
async function mostraMulheres(request, response) {
    try {
        //esperando a conexao e quando buscar trazer todas as mulheres da lista
        const mulheresVindasDoBandoDeDados = await Mulher.find()

        //conexao feita com sucesso traz a resposta por meio do json
        response.json(mulheresVindasDoBandoDeDados);
    } catch (error) {
        console.log(error)
    }

}

// esse é o codigo de POST para criar mais mulheres na lista
async function criaMulher(request, response) {
    const novaMulher = new Mulher({

        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })
    try {
        //criação da nova mulher a partir do bando de dados - salva corpo da requisição é a novamulher e guarda na mulhercriada
        const mulherCriada = await novaMulher.save()

        // função status é para aparecer a resposta criada igual no insonmia
        response.status().json(mulherCriada)

        //aqui mostra o erro no console
    } catch (error) {
        console.log(error)
    }
}

//PATCH essa função faz a alteração do nome,imagem ou minibio da lista.
async function corrigiMulher(request, response) {
    //aqui a tentativa da alteração da mulher
    try {
        //fazendo comunicao com banco e procurando por id 
        const mulherEncontrada = await Mulher.findById(request.params.id)

        //aqui está permitindo que se tiver uma mudança no corpo da requisição a mudança seja alterada
        if (request.body.nome) {
            mulherEncontrada.nome = request.body.nome
        }

        if (request.body.minibio) {
            mulherEncontrada.minibio = request.body.minibio
        }

        if (request.body.imagem) {
            mulherEncontrada.imagem = request.body.imagem
        }

        if (request.body.citacao) {
            mulherEncontrada.citacao = request.body.citacao
        }

        //aqui pedindo para ser salvo no banco de dados
        const mulherAtualizadaNoBandoDeDados = await mulherEncontrada.save()

        //aqui é a resposta para requisição
        response.json(mulherAtualizadaNoBandoDeDados)


    } catch (error) {
        console.log(error)
    }
}


//DELETAR iremos deletar pelo id
async function deletaMulher(request, response) {
    try {
        await Mulher.findByIdAndDelete(request.params.id)

        //resposta que foi deletada com sucesso
        response.json({ mensagem: 'mulher deletada com sucesso' })

    } catch (error) {
        console.log(error)
    }

}

// essa é a função para pegar a porta
function mostraPorta() {
    console.log('Servidor criado e rodado na porta ', porta);
}

app.use(router.get('/mulheres', mostraMulheres))  // aqui é a segunda configuração da rota que estou pegando o get/mulheres
app.use(router.post('/mulheres', criaMulher)) // rota de post configurada
app.use(router.patch('/mulheres/:id', corrigiMulher)) //configuração da rota por busca do id
app.use(router.delete('/mulheres/:id', deletaMulher)) //passando a rota para deletar

app.listen(porta, mostraPorta); // aqui estou ouvindo a porta