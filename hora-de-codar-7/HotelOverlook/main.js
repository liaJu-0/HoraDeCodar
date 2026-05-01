const NOME_HOTEL = "Overlook";
var nome_usuario = "";

var quartos = Array(20).fill(null);
var lista_hospedes = [];

window.onload = function() {
    iniciar_sistema();
};

function iniciar_sistema() {
    login(); 
}