function abastecimento() {
    let wayne_alcool = lerNumero("Qual o valor do álcool no posto Wayne Oil?");
    let wayne_gasolina = lerNumero("Qual o valor da gasolina no posto Wayne Oil?");
    let stark_alcool = lerNumero("Qual o valor do álcool no posto Stark Petrol?");
    let stark_gasolina = lerNumero("Qual o valor da gasolina no posto Stark Petrol?");

    if (isNaN(wayne_alcool) || isNaN(wayne_gasolina) || isNaN(stark_alcool) || isNaN(stark_gasolina)) {
        alert("Valores inválidos. Cancelando a operação.");
        return main_menu();
    }

    let combustivel_wayne = "";
    let preco_wayne = 0;

    if (wayne_alcool <= (wayne_gasolina * 0.70)) {
        combustivel_wayne = "álcool";
        preco_wayne = wayne_alcool;
    } else {
        combustivel_wayne = "gasolina";
        preco_wayne = wayne_gasolina;
    }

    let combustivel_stark = "";
    let preco_stark = 0;

    if (stark_alcool <= (stark_gasolina * 0.70)) {
        combustivel_stark = "álcool";
        preco_stark = stark_alcool;
    } else {
        combustivel_stark = "gasolina";
        preco_stark = stark_gasolina;
    }

    let posto_escolhido = "";
    let combustivel_escolhido = "";

    if (preco_wayne <= preco_stark) {
        posto_escolhido = "Wayne Oil";
        combustivel_escolhido = combustivel_wayne;
    } else {
        posto_escolhido = "Stark Petrol";
        combustivel_escolhido = combustivel_stark;
    }

    alert("É mais barato abastecer com " + combustivel_escolhido + " no posto " + posto_escolhido + ".");

    main_menu();
}