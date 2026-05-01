function main_menu() {
    let menu_texto = "Selecione uma opção:\n" +
        "1. Reservas de Quartos\n" +
        "2. Cadastro de Hóspedes\n" +
        "3. Eventos\n" +
        "4. Ar-Condicionado\n" +
        "5. Abastecimento\n" +
        "6. Relatórios Operacionais\n" +
        "7. Sair";

    let escolha = parseInt(prompt(menu_texto));

    switch (escolha) {
        case 1: 
            reserva_quartos();
            break;
        case 2: 
            menu_hospedes();
            break;
        case 3: 
            subprograma_eventos();
            break;
        case 4: 
            ar_condicionado(); 
            break;
        case 5: 
            alert("Módulo de Abastecimento em construção...");
            main_menu();
            break;
        case 6: 
            alert("Módulo de Relatórios em construção...");
            main_menu();
            break;
        case 7: 
            alert("Muito obrigado e até logo, " + nome_usuario + ".");
            break;
        default:
            alert("Opção inválida. Por favor, escolha um número de 1 a 7.");
            main_menu();
            break;
    }
}