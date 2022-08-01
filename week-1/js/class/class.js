class Animal {
  constructor(name) { // default method
    this.name = name;
    console.log(this);
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal { // inheritance
  constructor() {
    super('special dog');
  }
}

const dog = new Animal('Dog'); // new instances
const cat = new Animal('Cat'); // new instances

cat.speak()

const specialDog = new Dog();
specialDog.speak();