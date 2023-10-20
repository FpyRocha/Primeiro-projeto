"use strict";

const menu = document.querySelector(".menu");
const linkMenu = document.querySelector(".icone");

linkMenu.addEventListener("click", function(event){
    /* A instrução abaixo ANULA o comportamento
    padrão dos links <a> (que é do navegador
    tentar abrir alguma página) */
    event.preventDefault();
    menu.classList.toggle("aberto");
});