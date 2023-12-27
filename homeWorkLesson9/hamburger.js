class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  static SIZE_SMALL = { price: 50, calories: 20 };
  static SIZE_LARGE = { price: 100, calories: 20 };

  static STUFFING_CHEESE = { price: 10, calories: 20 };
  static STUFFING_SALAD = { price: 20, calories: 5 };
  static STUFFING_POTATO = { price: 15, calories: 10 };

  static TOPPING_SPICE = { price: 15, calories: 0 };
  static TOPPING_MAYO = { price: 20, calories: 5 };

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculateCalories() {
    let totalCalories = this.size.calories + this.stuffing.calories;
    this.toppings.forEach((topping) => {
      totalCalories += topping.calories;
    });
    return totalCalories;
  }

  calculatePrice() {
    let totalPrice = this.size.price + this.stuffing.price;
    this.toppings.forEach((topping) => {
      totalPrice += topping.price;
    });
    return totalPrice;
  }
}

let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log("calories :", hamburger.calculateCalories());
console.log("price :", hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_SPICE);

console.log("price with spice :", hamburger.calculatePrice());