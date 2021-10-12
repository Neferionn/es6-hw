class Animal {
  #name;
  constructor(name) {
    this.#name = name;
  }
  get name() {
    return this.#name;
  }
}

class Dog extends Animal {
  constructor(name, created = new Date()) {
    super(name);
    this.created = created;
  }
}

const dog = new Dog("puppey");
console.log(`Dogs name : ${dog.name}`);
