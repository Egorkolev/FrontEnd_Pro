class Person {
    constructor(name, gender) {
        this.name = name;   
        this.gender = gender;
    }
}

class Appartment {
    constructor () {
       this.residents = [];
    }

    AddResident (person) {
        this.residents.push(person);
    }
}

class House {
    constructor(maxApartmens) {
        this.apartmens = [];
        this.maxApartmens = maxApartmens;
    }

    AddApartment (apartment) {
        if(this.apartmens.length < this.maxApartmens) {
            this.apartmens.push(apartment)
        } else {
            console.log("this is the maximum apartment");
        }
    }
}

let person1 = new Person("Ivan", "male");
let person2 = new Person("Olga", "fimale");

console.log("person1", person1);
console.log("person2", person2);

let apartment1 = new Appartment();
let apartment2 = new Appartment();

apartment1.AddResident(person1);
apartment2.AddResident(person2);

console.log("apartment1", apartment1);
console.log("apartment2", apartment2);

let house = new House(5);
console.log("house", house);

house.AddApartment(apartment1);
house.AddApartment(apartment2);

console.log("added apartmen in house", house);