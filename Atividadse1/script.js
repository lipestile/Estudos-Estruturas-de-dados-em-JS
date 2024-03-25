// Faça um script para solicitar o nome do usuário. Exiba uma mensagem de boas vindas com o nome informado. Use o método prompt() dentro da tag <script></script> da página html

function Ex1() {
  var nome = prompt("Qual o seu nome?");
  document.write(`Bem vindo senhor ${nome}`);
}
// Utilize uma estrutura de controle para descobrir se o valor de sua idade é par ou ímpar

function Ex2() {
  var idade = prompt(`Qual a sua idede?`);
  const verificador = idade % 2 == 0 ? "Par" : "impar";
  document.write(`\nSua idade é ${verificador}`);
}
//Faça um laço para imprimir todos os anos, do ano atual até o ano de seu nascimento.

function Ex3(atual, nascimento) {
  for (i = atual; i >= nascimento; i--) {
    console.log(i);
  }
}
//4. Peça ao usuário para digitar idades de 10 pessoas. Exiba quantas pessoas são maior de idade (18 anos) e quantas são menores.

function Ex4() {
  let maiores = 0;
  let menores = 0;

  for (let i = 0; i < 10; i++) {
    let idade = parseInt(prompt("Digite a idade da pessoa " + (i + 1) + ":"));
    if (idade >= 18) {
      maiores++;
    } else {
      menores++;
    }
  }

  console.log("Número de pessoas maiores de idade: " + maiores);
  console.log("Número de pessoas menores de idade: " + menores);
}
 //. Declare as seguintes propriedades (variáveis) em uma classe aluno (nome, idade e peso), instancie um objeto com seu nome. Depois acesse e altere os valores correspondentes aos seus tipos: nome(string), idade(inteiro), peso(double). Apresente na console o conteúdo de cada propriedade do objeto.

 function Ex5 {
    // Declaração da classe Aluno
    class Aluno {
        constructor(nome, idade, peso) {
            this.nome = nome;
            this.idade = idade;
            this.peso = peso;
        }
    }

// Instanciando um objeto da classe Aluno
    let aluno = new Aluno('Seu Nome', 20, 70);

// Acessando e alterando os valores
    aluno.nome = 'Novo Nome';
    aluno.idade = 21;
    aluno.peso = 75;

// Apresentando o conteúdo de cada propriedade do objeto
    console.log(`Nome: ${aluno.nome}`);
    console.log(`Idade: ${aluno.idade}`);
    console.log(`Peso: ${aluno.peso}`);

 }