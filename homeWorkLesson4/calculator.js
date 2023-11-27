// const operator = prompt("Enter one of the operator - (add , sub , mult , div)");
// const firstNumb = prompt("Enter the first number");
// const secondNumb = prompt("Enter the second number");

switch (operator) {
  case "add":
    alert(`${firstNumb} + ${secondNumb} = ${+firstNumb + +secondNumb}`);
    break;
  case "sub":
    alert(`${firstNumb} - ${secondNumb} = ${+firstNumb - +secondNumb}`);
    break;
  case "mult":
    alert(`${firstNumb} * ${secondNumb} = ${+firstNumb * +secondNumb}`);
    break;
  case "div":
    alert(`${firstNumb} / ${secondNumb} = ${+firstNumb / +secondNumb}`);
    break;
  default:
    alert(`you enter wrong numbers ore operator - (${firstNumb} ${operator} ${secondNumb})`)
    break;
}
