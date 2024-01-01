class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  personInfo() {
    console.log(`name: ${this.name}, age: ${this.age}`);
  }
}

class Car {
  constructor(brend, model, year, plate, owner) {
    this.brend = brend;
    this.model = model;
    this.year = year;
    this.plate = plate;
    this.owner = this.checkOwnerAge(owner);
  }

  checkOwnerAge(owner) {
    if (owner.age >= 18) {
      return owner;
    } else {
      console.log(`${owner.name} not rise 18 years old, cant be owned the car`);
      return null;
    }
  }

  carInfo() {
    console.log(
      `Car: ${this.brend} ${this.model}, Year: ${this.year}, Plate Number: ${this.plate}`
    );
    if (this.owner !== null) {
      console.log("owner infor:");
      this.owner.personInfo();
    } else {
      console.log("this owner information is not available");
    }
  }
}

const person1 = new Person("Egor", 32);
const person2 = new Person("Ivan", 16);

const car1 = new Car("Mercedes", "E300", 2018, "EH3205", person1);
const car2 = new Car("BMW", "E60", 2016, "EH5602", person2);

car1.carInfo();
car2.carInfo();
