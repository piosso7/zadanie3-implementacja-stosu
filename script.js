class Stack {
  #list = new Map();
  #maxSize = null;

  constructor(maxSize) {
    this.#maxSize = Number(maxSize) || null;
  }

  get size() {
    return this.#list.size;
  }

  //Dodawanie elementu do stosu
  push(item) {
    if (!this.#maxSize || this.size < this.#maxSize) {
      this.#list.set(this.size, item);
    }

    return this.size;
  }

  //Kasowanie elementu
  pop() {
    if (this.size) {
      const lastItem = this.#list.get(this.size - 1);
      this.#list.delete(this.size - 1);
      return lastItem;
    }
    return null;
  }

  //Pierwszy element
  peek() {
    return this.#list.get(this.size - 1) || null;
  }

  //Czyszczenie stosu
  clear() {
    this.#list = new Map();
  }

  print() {
    console.log(Array.from(this.#list.values()));
  }
}

const myStack = new Stack();

//Dodawanie elementów
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);

myStack.print();

//Kasowanie elementów
myStack.pop();
myStack.pop();

myStack.print();

//Wyświetlanie najwyższego elementu w stosie
console.log(myStack.peek());

//Czyszczenie stosu
myStack.clear();
myStack.print();
