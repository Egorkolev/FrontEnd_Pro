// home work concotenation of three rows
const firstRow = prompt();
const secondRow = prompt();
const thirdRow = prompt();
alert(`${firstRow} ${secondRow} ${thirdRow}`);

// home work Return splited 5 numbers
const getNumbers = prompt("please enter five digit numbers");
const arr = [];
if (Number(getNumbers) && getNumbers.length === 5) {
  for (let i = 0; i < getNumbers.length; i++) {
    arr.push(getNumbers[i]);
  }
  const result = arr.join(" ");
  alert(result);
} else {
  alert("please enter a Numbers and Five digits only");
}

// home work Calculator
const firstNumb = prompt("Enter Firt Number");
const secondNumb = prompt("Enter Second Number");

const minusNumb = +firstNumb - +secondNumb;
const plusNumb = +firstNumb + +secondNumb;
const multiplyNumb = +firstNumb * +secondNumb;
const devideNumb = +firstNumb / +secondNumb;

alert(
 `${firstNumb} - ${secondNumb} = ${minusNumb}
  ${firstNumb} + ${secondNumb} = ${plusNumb}
  ${firstNumb} * ${secondNumb} = ${multiplyNumb}
  ${firstNumb} / ${secondNumb} = ${devideNumb}`
);