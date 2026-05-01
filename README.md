# ⭐ Jornada "Hora de Codar"

Este repositório contém a evolução completa da minha jornada de aprendizado em lógica de programação e desenvolvimento de software. A série "Hora de Codar" percorreu desde a manipulação básica de variáveis até a construção de um sistema de gestão hoteleira modularizado.

## 📁 Estrutura do Repositório

O projeto está dividido em etapas que refletem o amadurecimento técnico e a complexidade dos desafios:

### 📗 Hora de Codar 1: Fundamentos
- Introdução a variáveis (`nome_do_carro`), entrada de dados com `prompt` e saída com `alert`.
- **Destaque:** Implementação de fórmulas para cálculo de áreas de figuras planas (Retângulo, Quadrado, Losango, Trapézio, Paralelogramo, Triângulo e Círculo).

### 📘 Hora de Codar 2: Estruturas Condicionais
- Decisões lógicas complexas e comparações numéricas (`if/else`).
- Validação de dados e cálculos biométricos (Peso ideal baseado em gênero e altura).
- Criação de uma micro calculadora funcional com menu de operações.

### 📙 Hora de Codar 3: Estruturas de Repetição
- Controle de fluxo com laços (`for`, `while`).
- Validação robusta de entradas (impedindo notas inválidas ou divisões por zero).
- Algoritmos para cálculos de médias aritméticas em intervalos numéricos e tabuadas dinâmicas.

### 📒 Hora de Codar 4: Estruturas de Dados (Arrays)
- Gerenciamento de coleções e listas dinâmicas.
- Cadastro de estudantes com sentinela de parada ("PARE").
- Busca em vetores e manipulação de itens em listas de compras (remover/verificar disponibilidade).

### 📕 Hora de Codar 5: Refatoração e UX
- Melhoria de um código legado de Caixa Eletrônico.
- Foco em **User Experience**, autenticação por senha e travas de segurança para impedir saldo negativo em saques ou transferências.

---

## ⭐ Projeto Final: Sistema de Gestão Hotel Overlook (Hora de Codar 7)

O ápice do projeto consiste em uma plataforma de operações internas para colaboradores do hotel, construída de forma **modular** e independente.

### 🛠️ Tecnologias Utilizadas
- **Linguagem:** JavaScript (ES6+)
- **Arquitetura:** Modular (Divisão por responsabilidade entre arquivos JS)
- **Interface:** Navegador (Interface baseada em diálogos `prompt` e `alert`)

### 🧩 Módulos Implementados

1.  **Autenticação e Sessão:** Proteção por senha (`2678`) com limite de 3 tentativas e bloqueio de sistema.
2.  **Reservas de Quartos:** Gerenciamento de 20 quartos com fatores de preço (Standard, Executivo, Luxo), taxa de serviço de 10% e mapa visual de ocupação [L/O].
3.  **Cadastro de Hóspedes:** CRUD completo (Criar, Ler, Atualizar e Deletar) com limite de 15 cadastros e pesquisa inteligente por prefixo.
4.  **Gestão de Eventos:** Pipeline complexo que valida:
    - Capacidade de auditórios (Laranja vs Colorado).
    - Disponibilidade de agenda (diferenciação entre dias de semana e fins de semana).
    - Logística de garçons e orçamento detalhado de Buffet.
5.  **Manutenção de Ar-Condicionado:** Comparativo entre múltiplas empresas para identificar o melhor custo-benefício.
6.  **Análise de Abastecimento:** Cálculo econômico baseado na regra dos 70% entre álcool e gasolina para a frota do hotel.
7.  **Relatórios Operacionais:** Painel de controle com taxa de ocupação, total de hóspedes e receita acumulada por setor.

---

## ▶️ Como Executar

1. Clone o repositório para sua máquina local.
2. Certifique-se de que os arquivos `.js` estão devidamente referenciados no seu `index.html` (o arquivo `utils.js` deve ser o primeiro a ser carregado).
3. Abra o arquivo `index.html` em qualquer navegador.
4. Utilize a senha de acesso padrão: `2678`.

---

## 🎓 Conclusões
Este projeto solidificou conceitos de **Arquitetura de Software**. A utilização de um módulo `utils.js` para centralizar validações e formatação de moedas demonstrou como reduzir a duplicidade de código e facilitar a manutenção de sistemas complexos.
