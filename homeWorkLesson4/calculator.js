// const operator = prompt("Enter one of the operator - (+ , - , * , /)");
// const firstNumb = prompt("Enter the first number");
// const secondNumb = prompt("Enter the second number");

switch (operator) {
  case "+":
    alert(`${firstNumb} + ${secondNumb} = ${+firstNumb + +secondNumb}`);
    break;
  case "-":
    alert(`${firstNumb} - ${secondNumb} = ${+firstNumb - +secondNumb}`);
    break;
  case "*":
    alert(`${firstNumb} * ${secondNumb} = ${+firstNumb * +secondNumb}`);
    break;
  case "/":
    alert(`${firstNumb} ? ${secondNumb} = ${+firstNumb / +secondNumb}`);
    break;
  default:
    alert(`you enter wrong numbers ore operator - (${firstNumb} ${operator} ${secondNumb})`)
    break;
}
