class SuperMath {
  check(obj) {
    const { X, Y, znak } = obj;

    const validOperators = ["+", "-", "/", "*", "%"];
    if (!validOperators.includes(znak)) {
      console.log("Некоректний математичний оператор.");
      this.input();
      return;
    }

    const confirmation = confirm(
      `Ви хочете виконати дію ${znak} з ${X} та ${Y}?`
    );
    if (confirmation) {
      const result = eval(`${X} ${znak} ${Y}`);
      console.log(`Результат: ${result}`);
    } else {
      this.input();
    }
  }

  input() {
    const newX = parseFloat(prompt("Введіть нове значення X:"));
    const newY = parseFloat(prompt("Введіть нове значення Y:"));
    const newZnak = prompt("Введіть математичний оператор (+ - / * %):");

    const newObj = { X: newX, Y: newY, znak: newZnak };
    this.check(newObj);
  }
}

const p = new SuperMath();
const obj = { X: 12, Y: 3, znak: "/" };
p.check(obj);
