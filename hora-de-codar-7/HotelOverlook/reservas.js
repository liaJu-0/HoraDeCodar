function reserva_quartos() {
    let valor_diaria = parseFloat(prompt("Informe o valor da diária:"));
    if (isNaN(valor_diaria) || valor_diaria <= 0) {
        alert("Valor inválido, " + nome_usuario);
        return main_menu();
    }

    let qtd_diarias = parseInt(prompt("Informe a quantidade de diárias (1-30):"));
    if (isNaN(qtd_diarias) || qtd_diarias <= 0 || qtd_diarias > 30) {
        alert("Valor inválido, " + nome_usuario);
        return main_menu();
    }

    let nome_hospede = prompt("Informe o nome completo do hóspede:");

    let tipo_quarto = prompt("Tipo de quarto (S - Standard / E - Executivo / L - Luxo):").toUpperCase();
    let fator = 0;
    let desc_tipo = "";

    if (tipo_quarto === 'S') { 
        fator = 1.00; desc_tipo = "Standard"; 
    } else if (tipo_quarto === 'E') { 
        fator = 1.35; desc_tipo = "Executivo"; 
    } else if (tipo_quarto === 'L') { 
        fator = 1.65; desc_tipo = "Luxo"; 
    } else {
        alert("Tipo de quarto inválido.");
        return main_menu();
    }

    let quarto_escolhido = 0;
    let quarto_valido = false;

    while (!quarto_valido) {
        quarto_escolhido = parseInt(prompt("Escolha um quarto (1-20):"));

        if (isNaN(quarto_escolhido) || quarto_escolhido < 1 || quarto_escolhido > 20) {
            alert("Número de quarto inválido. Escolha de 1 a 20.");
            continue;
        }

        let indice = quarto_escolhido - 1;

        if (quartos[indice] !== null) {
            alert("Quarto já está ocupado.");
            
            let livres = [];
            for (let i = 0; i < quartos.length; i++) {
                if (quartos[i] === null) {
                    livres.push(i + 1);
                }
            }
            alert("Quartos livres: " + livres.join(", "));
        } else {
            quarto_valido = true;
        }
    }

    let subtotal = valor_diaria * qtd_diarias * fator;
    let taxa = subtotal * 0.10;
    let total = subtotal + taxa;

    let subtotal_fmt = subtotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    let taxa_fmt = taxa.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    let total_fmt = total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

    let resumo = "Resumo da Reserva:\n" +
        "Hóspede: " + nome_hospede + "\n" +
        "Quarto: " + quarto_escolhido + " (" + desc_tipo + ")\n" +
        "Subtotal: " + subtotal_fmt + "\n" +
        "Taxa de serviço (10%): " + taxa_fmt + "\n" +
        "Total: " + total_fmt + "\n\n" +
        nome_usuario + ", confirma a reserva? (S/N):";

    let confirma = prompt(resumo).toUpperCase();

    if (confirma === 'S') {
        quartos[quarto_escolhido - 1] = nome_hospede;
        
        alert("Reserva efetuada com sucesso.");

        let mapa = "Mapa de Quartos:\n\n";
        for (let i = 0; i < 20; i++) {
            mapa += (quartos[i] === null ? "[L]" : "[O]") + " ";
            
            if ((i + 1) % 5 === 0) {
                mapa += "\n"; 
            }
        }
        alert(mapa);

    } else {
        alert("Reserva não efetuada.");
    }

    main_menu();
}