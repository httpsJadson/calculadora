const input = document.querySelector('.resultado input');
let expressao = "";

// NÚMEROS
document.getElementById('btn-0').onclick = () => adicionar("0");
document.getElementById('btn-1').onclick = () => adicionar("1");
document.getElementById('btn-2').onclick = () => adicionar("2");
document.getElementById('btn-3').onclick = () => adicionar("3");
document.getElementById('btn-4').onclick = () => adicionar("4");
document.getElementById('btn-5').onclick = () => adicionar("5");
document.getElementById('btn-6').onclick = () => adicionar("6");
document.getElementById('btn-7').onclick = () => adicionar("7");
document.getElementById('btn-8').onclick = () => adicionar("8");
document.getElementById('btn-9').onclick = () => adicionar("9");
document.getElementById('ponto').onclick = () => adicionar(".");

// OPERADORES
document.getElementById('soma').onclick = () => adicionar_operador("+");
document.getElementById('subtracao').onclick = () => adicionar_operador("-");
document.getElementById('multiplicacao').onclick = () => adicionar_operador("*");
document.getElementById('divisao').onclick = () => adicionar_operador("/");

// FUNÇÕES
document.getElementById('btn-limpar').onclick = limparUltimo;
document.getElementById('btn-limparTudo').onclick = limparTudo;
document.getElementById('igual').onclick = calcular;

// ------------------ FUNÇÕES ----------------------

function adicionar(valor) {
    expressao += valor;
    input.value = expressao;
}

function adicionar_operador(op) {
    if (expressao === "") return;        // não coloca operador no começo
        if (ultimoEhOperador()) return;      // não coloca dois operadores seguidos
        expressao += op;
        input.value = expressao;
}

function limparUltimo() {
    expressao = expressao.slice(0, -1);
    input.value = expressao;
}

function limparTudo() {
    expressao = "";
    input.value = "";
}

function calcular() {
    try {
        expressao = eval(expressao).toString();
        input.value = expressao;
    } catch {
        input.value = "Erro";
        expressao = "";
    }
}

function ultimoEhOperador() {
    const ultimo = expressao[expressao.length - 1];
    return ultimo === "+" || ultimo === "-" || ultimo === "*" || ultimo === "/";
}


