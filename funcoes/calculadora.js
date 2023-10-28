"use strict";
// Função principal da calculadora
function calculadora() {
    const primeiroNumero = Number(prompt("Informe o primeiro número: "));
    const segundoNumero = Number(prompt("Informe o segundo número: "));
    // Solicitar ao usuário 
    const operacao = prompt("qual operação deseja realizar? (soma ,subtração , multiplicação ou divisão: )");
    // Realizar a operação de escolha
    switch (operacao) {
        case "+":
            return primeiroNumero + segundoNumero;
            break;
        case "-":
            return primeiroNumero - segundoNumero;
            break;
        case "*":
            return primeiroNumero * segundoNumero;
            break;
        case "/":
            return primeiroNumero / segundoNumero;
            break;
        default:
            return "operação inválida";
    }
    // Chamar a função principal calculadora()
    const resultado = calculadora();
    // Exiber o resultado da operação
    alert(resultado);
}
