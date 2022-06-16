class Human {
  //   constructor() {
  //     this.gender = 'Others';
  //   }
  //   printGender() {
  //     console.log(this.gender);
  //   }

  gender = 'Others';

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  //   constructor() {
  //     super();
  //     this.name = 'Genesis';
  //     this.gender = 'Male';
  //   }
  //   printName() {
  //     console.log(this.name)
  //   }

  name = 'Genesis';
  gender = 'Male';

  printName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printName();
person.printGender();
