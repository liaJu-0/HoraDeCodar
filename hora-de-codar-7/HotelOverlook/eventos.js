function subprograma_eventos() {
    let convidados = lerNumero("Informe o número de convidados do evento:");

    if (!validarNumero(convidados) || convidados > 350) {
        alert("Número de convidados inválido.");
        return main_menu();
    }

    let auditorio = "";
    let cadeiras_adicionais = 0;

    if (convidados <= 220) {
        auditorio = "Laranja";
        if (convidados > 150) {
            cadeiras_adicionais = convidados - 150;
        }
    } else {
        auditorio = "Colorado";
    }

    let msg_auditorio = "Auditório selecionado: " + auditorio;
    if (cadeiras_adicionais > 0) {
        msg_auditorio += " (Inclua mais " + cadeiras_adicionais + " cadeiras)";
    }
    alert(msg_auditorio);

    let dia = prompt("Informe o dia da semana (ex: segunda, terca, sabado):").toLowerCase().trim();
    let hora_inicial = lerNumero("Informe a hora de início do evento (apenas o número inteiro):");
    let duracao = lerNumero("Informe a duração do evento em horas:");

    if (isNaN(hora_inicial) || !validarNumero(duracao) || duracao > 12) {
        alert("Dados de horário ou duração inválidos.");
        return main_menu();
    }

    let hora_final = hora_inicial + duracao;
    let disponivel = false;

    if (dia === "sabado" || dia === "domingo") {
        if (hora_inicial >= 7 && hora_final <= 15) {
            disponivel = true;
        }
    } else {
        if (hora_inicial >= 7 && hora_final <= 23) {
            disponivel = true;
        }
    }

    if (!disponivel) {
        alert("Auditório indisponível para o dia e horário informados.");
        return main_menu();
    }

    let empresa = prompt("Informe o nome da empresa contratante:");
    alert("Auditório reservado para " + empresa + ": " + dia + " às " + hora_inicial + "hs até às " + hora_final + "hs.");

    let garcons_base = Math.ceil(convidados / 12);
    let garcons_reforco = Math.floor(duracao / 2);
    let total_garcons = garcons_base + garcons_reforco;
    let custo_garcons = total_garcons * duracao * 10.50;

    let litros_cafe = convidados * 0.2;
    let litros_agua = convidados * 0.5;
    let qtd_salgados = convidados * 7;

    let custo_cafe = litros_cafe * 0.80;
    let custo_agua = litros_agua * 0.40;
    let custo_salgados = (qtd_salgados / 100) * 34.00;
    
    let custo_buffet = custo_cafe + custo_agua + custo_salgados;
    let total_evento = custo_garcons + custo_buffet;

    let relatorio = "[Relatório do Evento]\n\n" +
        "Auditório: " + auditorio + "\n" +
        "Empresa: " + empresa + "\n" +
        "Data: " + dia + " das " + hora_inicial + "h às " + hora_final + "h\n" +
        "Convidados: " + convidados + "\n" +
        "Duração: " + duracao + " horas\n\n" +
        "Garçons necessários: " + total_garcons + "\n" +
        "Custo com garçons: " + formatarMoeda(custo_garcons) + "\n\n" +
        "Buffet:\n" +
        "- Café: " + litros_cafe.toFixed(1) + " L\n" +
        "- Água: " + litros_agua.toFixed(1) + " L\n" +
        "- Salgados: " + qtd_salgados + " un\n" +
        "Custo do buffet: " + formatarMoeda(custo_buffet) + "\n\n" +
        "Valor Total: " + formatarMoeda(total_evento) + "\n\n" +
        nome_usuario + ", confirmar a reserva do evento? (S/N)";

    let confirmacao = prompt(relatorio).toUpperCase();

    if (confirmacao === 'S') {
        alert("Reserva efetuada com sucesso.");
        total_eventos++;
        receita_eventos += total_evento;
    } else {
        alert("Reserva não efetuada.");
    }

    main_menu();
}