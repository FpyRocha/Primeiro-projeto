// Seleção dos elementos: botão carregar e lista
const botao = $("#carregar");
const lista = $("#lista");

// Ouvinte de evento para clicar no botão 
botao.on("click", function () {

    /* Técnica Ajax através da jQuery */
    $.ajax({
        url: "http://localhost:3000/candidatos",
        dataType: "json",
        success: function (resposta) {
// Reset/limpe a lista ANTES do carragamento 
lista.html("");

            /* Loop $.each para percorrer os dados da resposta vinda do servidor/API */
            $.each(resposta, function (indice, candidato) {
                lista.append(
                    `<li class="list-group-item">${candidato.nome} - ${candidato.vaga}</li>`
                );

            });

        }
    });

});