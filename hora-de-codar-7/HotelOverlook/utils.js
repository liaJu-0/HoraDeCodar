function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function lerNumero(mensagem) {
    return parseFloat(prompt(mensagem));
}

function validarNumero(valor) {
    return !isNaN(valor) && valor > 0;
}

function obterDataHoraAtual() {
    return new Date().toLocaleString('pt-BR');
}