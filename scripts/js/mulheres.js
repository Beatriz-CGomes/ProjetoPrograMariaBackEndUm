const porta = 3333;

const express = require('express');
const router = express.Router();

const app = express();

const mulheres = [
    {
        nome: 'Beatriz Cunha',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQHnqPxlHevETw/profile-displayphoto-shrink_800_800/0/1680716015639?e=1687392000&v=beta&t=m6yCxTX-OBZRrergEvQlovJbIJXyCCMs_dP5vdrKEcM',
        minibio: 'Desenvolvedora Full Stack Junior'
    }, 
    {
        nome: 'Iana Chan',
        imagem: 'https://media.licdn.com/dms/image/C4D03AQE-aD7nj2W_0Q/profile-displayphoto-shrink_800_800/0/1563383651406?e=1687392000&v=beta&t=Mr2bV76JpNK4_prNgZUZbiWE10JJt0JMLor8JlmmnYI',
        miniobio: 'Fundadora da PrograMaria'
    }, 
    {
        nome: 'Nina da Hora',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQFfEO5sNww0sA/profile-displayphoto-shrink_800_800/0/1679701313082?e=1687392000&v=beta&t=5Xn5iMIkRBeKZSWng4Wz3vLm9wUeNEPo7H8xYwkbRk4',
        miniobio: 'Hacker antirracista'
    }
]
function mostraMulheres(request, response){
    response.json(mulheres);
}

function mostraPorta() {
    console.log('Servidor criado e rodado na porta ', porta);
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta);