// pilha

// class Stack {
//     constructor( ){
//         this.item = []
//     }
// }

/*

Os métodos a seguir estarão disponíveis na classe Stack:
    • push(elemento(s)): esse método adiciona um novo elemento (ou vários elementos) no topo da pilha.
    • pop( ) : esse método remove o elemento que está no topo da pilha. Também devolve o elemento removido.
    • peek(  ): esse método devolve o elemento que está no topo da pilha. A pilha não é modificada (o elemento não é removido; ele é devolvido apenas como informação).
    • isEmpty(  ): esse método devolve true se a pilha não contiver nenhum elemento e false se o tamanho da pilha for maior que 0.
    • clear(  ): esse método remove todos os elementos da pilha.
    • size(  ): esse método devolve o número de elementos contidos na pilha. É semelhante à propriedade lenght de um arra

*/

class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    //Adicona um novo elemento na pilha
    this.items.push(element);
  }
  pop() {
    //Remove o item no top da lista
    return this.items.pop();
  }
  peek() {
    //devolve o elemento que está no top da pilha
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    // informa se a pilha esta vazia ou não
    return this.items.length === 0;
  }
  clear() {
    // limpa a pilha
    this.items = [];
    
  }
  size() {
    //informa o tamanho da pilha
    return this.items.length;
  }
  print() {
    //imprime a pilha no console
    console.log(this.items.toString());

  }
}

const stack = new Stack();

console.log(stack.isEmpty());

stack.push(5);
stack.push(8);

console.log(stack.peek());

stack.push(11);

console.log(stack.size());

console.log(stack.isEmpty());

stack.push(15);

stack.print();

stack.pop();
stack.pop();

stack.print();

var pilha = new Stack();
console.log(pilha.isEmpty());
pilha.push(5);
pilha.print();
pilha.push(8);
pilha.print();
pilha.push(11);
pilha.print();
pilha.push(15);
pilha.print();
pilha.pop();
pilha.print();
pilha.pop();
pilha.print();
pilha.pop();
pilha.print();
pilha.pop();
pilha.print();
console.log(pilha.isEmpty()); 


function decimalToBinary(decNumber){
    var restStack = new Stack(),
    rest,
    binaryString = '';

    while(decNumber > 0){
        rest = Math.floor(decNumber %2);
        restStack.push(rest);
        decNumber = Math.floor(decNumber / 2);
    }

    while(!restStack.isEmpty()){
        binaryString += restStack.pop().toString();
    }
    return binaryString
}

console.log(decimalToBinary(10))
console.log(decimalToBinary(25))
console.log(decimalToBinary(233))
console.log(decimalToBinary(10000))







