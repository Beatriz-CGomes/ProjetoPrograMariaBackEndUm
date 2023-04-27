//aqui estou iniciando o express 
const express = require('express');

// aqui estou configurando a primeira parte da rota
const router = express.Router();

// biblioteca uuid
const { v4: uuidv4 } = require('uuid');

// aqui estou iniciando o app 
const app = express();

// aqui estou definindo a porta de acessp
const porta = 3333;

// aqui estou criando uma inicial lista de mulheres
const mulheres = [
    {
        id: '1',
        nome: 'Beatriz Cunha',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQHnqPxlHevETw/profile-displayphoto-shrink_800_800/0/1680716015639?e=1687392000&v=beta&t=m6yCxTX-OBZRrergEvQlovJbIJXyCCMs_dP5vdrKEcM',
        minibio: 'Desenvolvedora Full Stack Junior'
    },
    {
        id: '2',
        nome: 'Iana Chan',
        imagem: 'https://media.licdn.com/dms/image/C4D03AQE-aD7nj2W_0Q/profile-displayphoto-shrink_800_800/0/1563383651406?e=1687392000&v=beta&t=Mr2bV76JpNK4_prNgZUZbiWE10JJt0JMLor8JlmmnYI',
        miniobio: 'Fundadora da PrograMaria'
    },
    {
        id: '3',
        nome: 'Nina da Hora',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQFfEO5sNww0sA/profile-displayphoto-shrink_800_800/0/1679701313082?e=1687392000&v=beta&t=5Xn5iMIkRBeKZSWng4Wz3vLm9wUeNEPo7H8xYwkbRk4',
        miniobio: 'Hacker antirracista'
    }
]

// essa função é do get para pegar a lista
function mostraMulheres(request, response) {
    response.json(mulheres);
}

// esse é o codigo de POST para criar mais mulheres na lista
function criaMulher(request, response) {
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


// essa é a função para pegar a porta
function mostraPorta() {
    console.log('Servidor criado e rodado na porta ', porta);
}

app.use(router.get('/mulheres', mostraMulheres))  // aqui é a segunda configuração da rota que estou pegando o get/mulheres
app.use(router.post('/mulheres', criaMulher)) // rota de post configurada

app.listen(porta, mostraPorta); // aqui estou ouvindo a porta