function login() {
    alert("Bem-vindo ao " + NOME_HOTEL);
    nome_usuario = prompt("Por favor, informe seu nome:");
    
    let tentativas = 3;
    let senha_correta = "2678";

    while (tentativas > 0) {
        let senha = prompt(nome_usuario + ", informe a senha de acesso:");
        
        if (senha === senha_correta) {
            alert("Bem-vindo ao Hotel " + NOME_HOTEL + ", " + nome_usuario + ". É um imenso prazer ter você por aqui!");
            main_menu();
            return;
        } else {
            tentativas--;
            if (tentativas > 0) {
                alert("Senha incorreta. Você ainda tem " + tentativas + " tentativa(s).");
            } else {
                alert("Sistema bloqueado por excesso de tentativas.");
            }
        }
    }
}