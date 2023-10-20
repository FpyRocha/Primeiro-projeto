"use strict";

const selectVagas = document.querySelector("#vaga");

/* Técnica Ajax
Técnica de comunicação e transmissão de dados */

// Etapa 1: acessando API (endpoint de vagas)
fetch("http://localhost:3000/vagas")

    // Etapa 2: depois de buscar/acessar, pegamos 
    // a resposta do servidor no formato json
    .then(resposta => resposta.json())

    // Etapa 3: e depois trabalhamos com os dados recebidos 
    .then(dados => {

        // Definindo um option vazio
        selectVagas.innerHTML = "<option></option>";

        for (let vaga of dados) {
            // 1) Criando na mem´[oria/DOM o elemento <option>
            let opcao = document.createElement("option");

            // 2) Colocando no atributo value o id da vaga
            opcao.value = vaga.id;

            // 3) Colocando o titulo da vaga dentro da tag
            opcao.textContent = vaga.titulo;

            // 4) Colocando <option> criado DENTRO do select
            selectVagas.appendChild(opcao);
        }

    });