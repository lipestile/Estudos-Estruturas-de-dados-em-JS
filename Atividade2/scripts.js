function q1(numeros) {
  if (numeros[0] > numeros[1]) {
    let temp = numeros[0];
    numeros[0] = numeros[1];
    numeros[1] = temp;
  }
  return numeros;
};
//console.log(ordenarNumeros([5, 2]));
function q2(numeros) {
  let trocou;
  do {
    trocou = false;
    for (let i = 0; i < numeros.length - 1; i++) {
      if (numeros[i] > numeros[i + 1]) {
        let temp = numeros[i];
        numeros[i] = numeros[i + 1];
        numeros[i + 1] = temp;
        trocou = true;
      }
    }
  } while (trocou);

  return numeros;
};
// console.log(ordenarTresNumeros([5, 2, 8]));
function q3() {
  // Cria um array vazio
  let numeros = []
  // Pergunta ao usuário 3 números
  for (let i = 0; i < 3; i++) {
    let num = prompt("Digite um número:");
    numeros.push(num);
  }

  // Exibe o array
  console.log("Array original: " + numeros);

  // Inverte o array
  numeros.reverse();

  // Exibe o array invertido
  console.log("Array invertido: " + numeros);
};
//q3()
function q4(vetor, numero) {
    let indices = [];
    for(let i = 0; i < vetor.length; i++) {
        if (vetor[i] === numero) {
            indices.push(i);
        }
    }
    return indices;
};
function q5(){
    // Pede um inteiro positivo para o usuário
    let n = prompt("Digite um número inteiro positivo:");

// Converte a entrada do usuário para um número
    n = Number(n);

// Cria um array para armazenar a sequência de Fibonacci
    let fibonacci = [0, 1];

// Popula o array com os números de Fibonacci
    for(let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

// Exibe o resultado usando o método join
    console.log(fibonacci.join(", "));
};
function q6(){
    // Pede um inteiro positivo para o usuário
    let n = prompt("Digite um número inteiro positivo:");

// Converte a entrada do usuário para um número
    n = Number(n);

// Cria um array para armazenar os fatoriais
    let fatoriais = [1];

// Popula o array com os fatoriais
    for(let i = 1; i <= n; i++) {
        fatoriais[i] = i * fatoriais[i - 1];
    }

// Exibe o resultado usando o método join
    console.log(fatoriais.join(", "));
};
function q7(){
// Pede ao usuário a quantidade de linhas e colunas
  let linhas = prompt("Digite a quantidade de linhas:");
  let colunas = prompt("Digite a quantidade de colunas:");

  // Converte as entradas do usuário para números
  linhas = Number(linhas);
  colunas = Number(colunas);

// Cria a matriz
  let matriz = new Array(linhas);

// Inicializa a matriz
  for(let i = 0; i < linhas; i++) {
      matriz[i] = new Array(colunas);
      for(let j = 0; j < colunas; j++) {
          matriz[i][j] = i + j + 1;
      }
  }

// Exibe a matriz
  for(let i = 0; i < linhas; i++) {
      console.log(matriz[i].join(", "));
  }

};
function q8(decimal){
  return decimal.toString(16);
};

function q9(){
  let pilha = [];

for(let i = 0; i < 10; i++) {
    let num = prompt("Digite um número:");

// Converte a entrada do usuário para um número
    num = Number(num);

    if(num % 2 === 0) {
// Se o número for par, empilhe na pilha
        pilha.push(num);
    } else {
// Se o número for ímpar, desempilhe um número da pilha
        if(pilha.length > 0) {
            pilha.pop();
        } else {
            console.log("A pilha está vazia.");
        }
    }
}

// Se ao final do programa a pilha não estiver vazia, desempilhe todos os elementos
while(pilha.length > 0) {
    console.log(pilha.pop());
}
};
function q10(){
  // Cria duas pilhas vazias
let pilhaPar = [];
let pilhaImpar = [];

for(let i = 0; i < 10; i++) {
    let num = prompt("Digite um número:");

    // Converte a entrada do usuário para um número
    num = Number(num);

    if(num === 0) {
        // Se o número for zero, desempilhe um elemento de cada pilha
        if(pilhaPar.length > 0 && pilhaImpar.length > 0) {
            pilhaPar.pop();
            pilhaImpar.pop();
        } else {
            console.log("Erro: uma das pilhas está vazia.");
        }
    } else if(num % 2 === 0) {
        // Se o número for par, empilhe na pilha par
        pilhaPar.push(num);
    } else {
        // Se o número for ímpar, empilhe na pilha impar
        pilhaImpar.push(num);
    }
}

// Ao final do programa, desempilhe todos os elementos das duas pilhas
console.log("Elementos na pilha par:");
while(pilhaPar.length > 0) {
    console.log(pilhaPar.pop());
}

console.log("Elementos na pilha impar:");
while(pilhaImpar.length > 0) {
    console.log(pilhaImpar.pop());
}
    
};
