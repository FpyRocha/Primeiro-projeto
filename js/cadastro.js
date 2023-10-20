"use strict";

const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoNascimento = document.querySelector("#nascimento");
const campoTelefone = document.querySelector("#telefone");
const campoEmail = document.querySelector("#email");
const campoVaga = document.querySelector("#vaga");

/* Programção do formulário */
formulario.addEventListener("submit", function(event){
    // Anular o comportamento padrão
    event.preventDefault();

    /* Montando um ojeto JAVASCRIPT com todos os valores preenchidos no formulário */
    let dados = {
        nome: campoNome.value,
        nascimento: campoNascimento.value,
        telefone: campoTelefone.value,
        email: campoEmail.value,
        vaga: campoVaga.selectedOptions[0].textContent
    };

    /* Técnica Ajax (enviar dados ao servidor/API) */
    fetch("http://localhost:3000/candidatos", {
        // Método de envio de dados (POST)
        method: "POST",

        // Método de conversão de objeto JS
        // para formato válido para o JSON 
        body: JSON.stringify(dados),
        
        // Cabeçalho da transmissão 
        headers: { 
        "Content-Type":"application/json"}
    })
    // Feedback/Mensagem informando sobre o fim do envio
    .then( () => alert("Dados enviados!") );
});