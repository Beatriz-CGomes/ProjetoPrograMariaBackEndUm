const express = require('express');
const router = express.Router();
const app = express();

const porta = 3333;

app.use(express.json())

function mostraHora(request, response) {
    const data = new Date()
    const hora = data.toLocaleTimeString('pt-BR')
    response.send(hora)
}


function mostraPorta() {
    console.log('Servidor criado e rodado na porta ', porta);
}
app.use(router.get('/hora', mostraHora))

app.listen(porta, mostraPorta);
