function ar_condicionado() {
    let continuar = 'S';
    let menor_valor = Infinity;
    let empresa_menor_valor = "";

    while (continuar === 'S') {
        let nome_empresa = prompt("Qual o nome da empresa?");
        if (!nome_empresa) break;

        let valor_por_aparelho = lerNumero("Valor por aparelho:");
        let quantidade = lerNumero("Quantidade de aparelhos:");
        let percentual_desconto = lerNumero("Desconto (%):");
        let qtd_minima_desconto = lerNumero("Número mínimo de aparelhos para desconto:");
        let deslocamento = lerNumero("Valor do deslocamento:");

        if (isNaN(valor_por_aparelho) || isNaN(quantidade)) {
            alert("Valores inválidos. A cancelar o registo desta empresa.");
            continuar = prompt("Deseja informar novos dados, " + nome_usuario + "? (S/N):").toUpperCase();
            continue; 
        }

        let subtotal = valor_por_aparelho * quantidade;
        let valor_desconto = 0;

        if (quantidade >= qtd_minima_desconto) {
            valor_desconto = subtotal * (percentual_desconto / 100);
        }

        let valor_total = (subtotal - valor_desconto) + deslocamento;

        let resumo = "[Ar-Condicionado]\n" +
            "Empresa: " + nome_empresa + "\n" +
            "Valor por aparelho: " + valor_por_aparelho + "\n" +
            "Quantidade: " + quantidade + "\n" +
            "Desconto (%): " + percentual_desconto + "\n" +
            "Mínimo para desconto: " + qtd_minima_desconto + "\n" +
            "Deslocamento: " + deslocamento + "\n" +
            "Total: " + formatarMoeda(valor_total);

        alert(resumo);

        if (valor_total < menor_valor) {
            menor_valor = valor_total;
            empresa_menor_valor = nome_empresa;
        }

        continuar = prompt("Deseja informar novos dados, " + nome_usuario + "? (S/N):").toUpperCase();
    }

    if (empresa_menor_valor !== "") {
        alert("Melhor orçamento: " + empresa_menor_valor + " - " + formatarMoeda(menor_valor));
    } else {
        alert("Nenhum orçamento válido foi registado.");
    }

    main_menu();
}