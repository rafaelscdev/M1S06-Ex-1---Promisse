function verificarPar(numero) {
    return new Promise((resolve, reject) => {
        if (numero % 2 === 0) {
            resolve("Número validado é par");
        } else {
            reject("Error: número informado é ímpar");
        }
    });
}

// Testando a função
const numero = 10; // Altere o número aqui para testar diferentes valores
verificarPar(numero)
    .then((mensagem) => {
        document.write(`Mensagem de sucesso: ${mensagem}`);
    })
    .catch((erro) => {
        document.write(`Mensagem de erro: ${erro}`);
    });
