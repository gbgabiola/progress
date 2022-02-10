class Animal {
  constructor(name, age) {
    console.log('IN Animal CONSTRUCTOR!');
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating.`;
  }
}

class Cat extends Animal {
  constructor(name, age, livesLeft = 9) {
    console.log('IN CAT CONSTRUCTOR!');
    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    return 'MEOWWWW!!!';
  }
}

class Dog extends Animal {
  bark() {
    return 'WOOOF!!!';
  }

  eat() {
    return `${this.name} scarfs his food!`;
  }
}

// const monty = new Cat('Monty', 9);
// monty.eat();
// monty.meow();
// const wyatt = new Dog('Wyatt', 13);
// wyatt.eat();
// wyatt.bark();
