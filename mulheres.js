//aqui estou iniciando o express 
const express = require('express');

// aqui estou configurando a primeira parte da rota
const router = express.Router();

// biblioteca uuid
const { v4: uuidv4 } = require('uuid');

//ligando o banco de dadsos ao arquivo bando de dados
const conectaBancoDeDados = require('./bancoDeDados')
conectaBancoDeDados() // aqui chamando a função que conecta o banco de dados

//regra da criacao e conexao com a regra mulher
const Mulher = require('./mulherModel')

// aqui estou iniciando o app 
const app = express();
app.use(express.json()) //dizendo que estamos tratando as requisições

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
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }

    //aqui pega para cadastrar outra mulher
    mulheres.push(novaMulher)

    // aqui recebemos como resposta a lista das mulheres cadastradas atualizada!
    response.json(mulheres)
}

//PATCH essa função faz a alteração do nome,imagem ou minibio da lista.
function corrigiMulher(request, response) {
    //encontrando a mulher feita pelo id
    function encontraMulher(mulher) {
        if (mulher.id === request.params.id) {
            return mulher
        }
    }

    //aqui está buscando a lista inicial e está guardando a resposta na const mulherEncontrada
    const mulherEncontrada = mulheres.find(encontraMulher)

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

    response.json(mulheres)

}


//DELETAR iremos deletar pelo id
function deletaMulher(request, response) {
    function todasMenosEla(mulher) {
        if (mulher.id !== request.params.id) {
            return mulher
        }
    }
    //filtrando as mulheres que permaneceram na lista
    const mulheresQueFicaram = mulheres.filter(todasMenosEla)
    //aqui está retornando todas as mulheres que ficaram
    response.json(mulheresQueFicaram)
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