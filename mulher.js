const porta = 3333;

const express = require('express');
const router = express.Router()

const app = express();

function mostraMulher(request, response) {
    response.json({
        nome: 'Beatriz Cunha',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQHnqPxlHevETw/profile-displayphoto-shrink_800_800/0/1680716015639?e=1687392000&v=beta&t=m6yCxTX-OBZRrergEvQlovJbIJXyCCMs_dP5vdrKEcM',
        minibio: 'Desenolvedora Full Stack'

    });
}


function mostraPorta() {
    console.log('Servidor criado e rodado na porta ', porta);
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta);