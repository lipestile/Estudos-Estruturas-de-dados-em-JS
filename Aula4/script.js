const number = [1,2,3,[4,5,6]];

// console.log(number.length)

/*
                     posição
valores ->   1   4   6   7   8   4
indices ->   0   1   2   3   4   5

 */

const mediaTemperatura = []

mediaTemperatura[0] = 31.9;
mediaTemperatura[1] = 32.9;
mediaTemperatura[2] = 38.9;
mediaTemperatura[3] = 37.9;
mediaTemperatura[4] = 35.9;

// console.log(`conteudo do array: ${mediaTemperatura}`);
// console.log(`Média temperatura maio: ${mediaTemperatura[4]}`);
// console.log(`Média temperatuta janeiro: ${mediaTemperatura[0]}`);



let diasdasemana = new Array();

diasdasemana = new Array(7);

diasdasemana = new Array('Domingo', 'lunes', 'Martes', 'Miercoles', 'jueves', 'Viernes','Sabado');

let diasSemana = ['Domingo', 'lunes', 'Martes', 'Miercoles', 'jueves', 'Viernes','Sabado']

// console.log(diasSemana);

for (i = 0;i < diasSemana.length; i++){
    // console.log(diasSemana[i]);
}


const fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] = 1;

for (i = 2; i < 20; i ++ ){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

// se quiser imprimir no console, um elemento ao lado do outro
// faça uma conversão em string, contatenado com métado join. 

// console.log(fibonacci.join("   "))


for (i = 0;i < fibonacci.length; i++){
    // console.log(fibonacci[i]);
}


let lista = [0,1,2,3,4,5,6,7,8,9]

lista[number.length] = 11;



// .join: ela instringuifica e poem um espaço de acorda com a vontade do usuário
// .length: mostar o tamanho do array
// .push: insere elementos no final do array
// .unshift: adiciona elementos no inicio do array
// .pop: remove elemento do final do array
// .shift : remove o primriro elemento do array
// .splice: remove 



var avarageTemp1 = [1,2,3,4,5,6]
var avarageTemp2 = [6,5,4,3,2,1]


var avarageTemp = [];
avarageTemp[0] = avarageTemp1
avarageTemp[1] = avarageTemp2

function printMatrix (myMatrix){
    for (let i =0; i < myMatrix.length; i++){
        for(let j = 0; j < myMatrix[i].length; j++){
            console.log(myMatrix[i][j]);
        }
    }
}

// printMatrix(avarageTemp)

// este comando transforma matrix em tabela 
// console.table(avarageTemp)

const matrix3x3x3 = []



for(var i = 0; i < 3; i++){
    matrix3x3x3[i] = [] //precisamos inicializar cada array
    for(var j = 0; j < 3; j++){
        matrix3x3x3[i][j] = [];
        for (var z = 0; z < 3 ;z++) {
            matrix3x3x3[i][j][z] = i + j + z;
        }
    }
}

// console.table(matrix3x3x3);

//métado concat()

const zero = 0;
const positiveNumber = [1,2,3]
const negativeNumber = [-3,-2,-1]

let num = negativeNumber.concat(zero, positiveNumber)

// console.log(num.join(',  '));

function isEven(x){
    console.log(x)
    return (x % 2 === 0) ? true : false;
}

let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// numeros = numeros.every(isEven); quqndo o elemento e true

// numeros = numeros.some(isEven); quando o elementoe false


// numeros.forEach( x => console.log(x % 2 ===0 ));


// const myMap = numeros.map(isEven);

// console.log(myMap);

// const evenNumbers = numeros.filter(isEven);

// console.log(evenNumbers);

// console.log(numeros.reduce((previous, current) => previous + current))
//soma todos os arrays


 let aEntries = numeros.entries();

 for (let n of aEntries){
    // console.log(n)
 }

 
