// Servidor serve para servir as informações solicitada pelo cliente
// Funções são identificadores que guardam conjuntos de instruções com ações para serem chamado no código

const porta = 3333;

const express = require('express');
const app = express();


function mostraPorta() {
    console.log('Servidor criado e rodado na porta ', porta);
}

app.listen(porta, mostraPorta);