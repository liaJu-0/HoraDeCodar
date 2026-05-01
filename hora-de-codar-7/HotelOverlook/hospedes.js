function menu_hospedes() {
    let texto_menu = "[Cadastro de Hóspedes]\n" +
        "1. Cadastrar\n" +
        "2. Pesquisar exato\n" +
        "3. Pesquisar prefixo\n" +
        "4. Listar ordenado (A-Z)\n" +
        "5. Atualizar cadastro\n" +
        "6. Remover cadastro\n" +
        "7. Voltar";

    let opcao = parseInt(prompt(texto_menu));

    switch (opcao) {
        case 1: cadastrar_hospede(); break;
        case 2: pesquisar_exato(); break;
        case 3: pesquisar_prefixo(); break;
        case 4: listar_hospedes(); break;
        case 5: atualizar_hospede(); break;
        case 6: remover_hospede(); break;
        case 7: main_menu(); break; // Volta pro menu principal
        default:
            alert("Opção inválida.");
            menu_hospedes();
            break;
    }
}

function cadastrar_hospede() {
    if (lista_hospedes.length >= 15) {
        alert("Máximo de cadastros atingido");
        return menu_hospedes();
    }

    let nome_novo = prompt("Nome do hóspede:");
    if (!nome_novo) return menu_hospedes(); // Se cancelar ou deixar vazio

    let existe = lista_hospedes.find(hospede => hospede.nome.toLowerCase() === nome_novo.toLowerCase());

    if (existe) {
        alert("Hóspede já cadastrado");
    } else {
        let data_atual = new Date().toLocaleString('pt-BR');
        
        lista_hospedes.push({
            nome: nome_novo,
            data: data_atual
        });
        alert("Operação realizada com sucesso");
    }

    menu_hospedes();
}

function pesquisar_exato() {
    let busca = prompt("Informe o nome exato para pesquisa:");
    let encontrado = lista_hospedes.find(hospede => hospede.nome.toLowerCase() === busca.toLowerCase());

    if (encontrado) {
        alert("Hóspede " + encontrado.nome + " foi encontrado. (Cadastrado em: " + encontrado.data + ")");
    } else {
        alert("Hóspede não encontrado");
    }
    
    menu_hospedes();
}

function pesquisar_prefixo() {
    let prefixo = prompt("Informe o início do nome (prefixo):").toLowerCase();
    
    let resultados = lista_hospedes.filter(hospede => hospede.nome.toLowerCase().startsWith(prefixo));

    if (resultados.length > 0) {
        let texto_resultados = "Resultados encontrados:\n";
        for (let i = 0; i < resultados.length; i++) {
            texto_resultados += "- " + resultados[i].nome + "\n";
        }
        alert(texto_resultados);
    } else {
        alert("Hóspede não encontrado");
    }

    menu_hospedes();
}

function listar_hospedes() {
    if (lista_hospedes.length === 0) {
        alert("Nenhum hóspede cadastrado.");
        return menu_hospedes();
    }

    lista_hospedes.sort((a, b) => a.nome.localeCompare(b.nome));

    let texto_lista = "Lista de Hóspedes (A-Z):\n\n";
    for (let i = 0; i < lista_hospedes.length; i++) {
        texto_lista += "[" + i + "] " + lista_hospedes[i].nome + " | " + lista_hospedes[i].data + "\n";
    }

    alert(texto_lista);
    menu_hospedes();
}

function atualizar_hospede() {
    lista_hospedes.sort((a, b) => a.nome.localeCompare(b.nome));
    
    let indice = parseInt(prompt("Informe o índice [número] do hóspede que deseja atualizar:"));

    if (isNaN(indice) || indice < 0 || indice >= lista_hospedes.length) {
        alert("Índice inválido.");
    } else {
        let novo_nome = prompt("Informe o novo nome para " + lista_hospedes[indice].nome + ":");
        if (novo_nome) {
            lista_hospedes[indice].nome = novo_nome;
            lista_hospedes[indice].data = new Date().toLocaleString('pt-BR') + " (Atualizado)";
            alert("Operação realizada com sucesso");
        }
    }
    
    menu_hospedes();
}

function remover_hospede() {
    lista_hospedes.sort((a, b) => a.nome.localeCompare(b.nome));

    let indice = parseInt(prompt("Informe o índice [número] do hóspede que deseja remover:"));

    if (isNaN(indice) || indice < 0 || indice >= lista_hospedes.length) {
        alert("Índice inválido.");
    } else {
        let confirmacao = prompt("Tem certeza que deseja remover " + lista_hospedes[indice].nome + "? (S/N)").toUpperCase();
        if (confirmacao === 'S') {
            lista_hospedes.splice(indice, 1);
            alert("Operação realizada com sucesso");
        }
    }
    
    menu_hospedes();
}