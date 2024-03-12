var num = 1;
if(num === 1){
    console.log('num is egual to 1')
}
//-----------------------------------------///
var month = 5;
if(month === 1){
    console.log('Enero');
}else if (month === 2){
    console.log( 'Febrero');
}else if(month === 3){
    console.log('marzo');
}else if(month === 4){
    console.log('Abril');
}else{
    console.log('Mayo')
}

///---------------------------------------------///
var month = 5;
switch(month){
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    default:
        console.log("No es Febrero nin  el mes de Enero")
        break;
}

/////----------------------------------------////
for(var i = 0; i < 10; i++){
    console.log(i); 
}

///------------------------------------------///
var saida = "texto qualquer";
// document.write(saida)

var saidaaa = 'texto qualquer';
// alert(saidaaa)

//------------------------------//
var t = 0;
while(t < 10){
    console.log(t);
    t++;
};

///-------------//
var x = 0
do{
    console.log(x)
    x++;
} while (x < 10);

function output(text){
    console.log(text);
}

output('Hola');

function sum(num1,num2){
    return num1 + num2;
}

var result = sum(2,3)
output(result)
function media(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var  n2 = parseFloat(document.getElementById('n2').value);

    var media = (n1 + n2)/2;

    if(media >= 5)
     if(media == 10)
      alert("Uau! A//provado com Louvor!")
     else
      alert(`Aprovado ${media}`);
    else
    alert("Infelizmente você foi Reprovado");  
}

//-------------------------------------///
///Criação de objetos
// primeira forma
var obj = new Object();
//Segunda forma
var obj = {};

obj = {
    name: {
        first: "Felipe",
        last: "Souza"
    },
    address: "Rua dos Bobos - casa 4"
}
console.log(obj.name.first); // Felipe
console.log(obj.address); 

/// ADS035  – Prof. Regiano

// Uma maneira de declarar uma classe (construtor) que representa um livro:

// Declarando uma classe(construtor) que representa um livro:
function Carro (nome, marca, cor){
    this.nome = nome;
    this.marca = marca;
    this.cor = cor;
}

// para instanciar estas classes, podemos usar o código a segguir

var carro = new Carro('Fusca', 'VW', 'Preto');

// Acessando suas propriedades

console.log(carro.nome);
carro.title = 'kombi'
console.log(carro.title);














