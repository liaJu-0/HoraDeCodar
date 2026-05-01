function gerar_relatorios() {
    let ocupados = 0;
    for (let i = 0; i < quartos.length; i++) {
        if (quartos[i] !== null) ocupados++;
    }

    let total_geral = receita_hospedagem + receita_eventos;

    let relatorio = "[PAINEL DE CONTROLE - " + NOME_HOTEL.toUpperCase() + "]\n\n" +
        "--- OPERACIONAL ---\n" +
        "Total de reservas confirmadas: " + total_reservas + "\n" +
        "Taxa de ocupação atual: " + ocupados + " de 20\n" +
        "Hóspedes cadastrados no sistema: " + lista_hospedes.length + "\n" +
        "Quantidade de eventos confirmados: " + total_eventos + "\n\n" +
        "--- FINANCEIRO ---\n" +
        "Receita de Hospedagens: " + formatarMoeda(receita_hospedagem) + "\n" +
        "Receita de Eventos: " + formatarMoeda(receita_eventos) + "\n" +
        "TOTAL ACUMULADO: " + formatarMoeda(total_geral) + "\n\n" +
        "Gerado por: " + nome_usuario + "\n" +
        "Data: " + obterDataHoraAtual();

    alert(relatorio);

    main_menu();
}