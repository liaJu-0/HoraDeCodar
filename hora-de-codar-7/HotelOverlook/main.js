const NOME_HOTEL = "Overlook";
var nome_usuario = "";

var quartos = Array(20).fill(null);
var lista_hospedes = [];

var total_reservas = 0;
var total_eventos = 0;
var receita_hospedagem = 0;
var receita_eventos = 0;

window.onload = function() {
    iniciar_sistema();
};

function iniciar_sistema() {
    // Certifique-se que sua função no arquivo auth.js se chame autenticacao
    login();
}