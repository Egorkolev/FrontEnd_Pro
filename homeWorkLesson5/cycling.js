// 1.
// let list = document.getElementsByClassName("list");

// let numbersString = [];

// const numbString = () => {
//   for (let i = 10; i <= 20; i++) {
//     numbersString.push(i);
//   }
// };
// numbString();

// const renderStruing = () => {
//   for (let i = 0; i <= numbersString.length; i++) {
//     list[i].innerHTML = numbersString.join(", ");
//   }
// };
// renderStruing();

// 2.
// let squareOfNumb = [];
// const squareNumb = () => {
//   for (let i = 10; i <= 20; i++) {
//     squareOfNumb.push(i * i);
//   }
// };
// squareNumb();
// console.log(squareOfNumb);

// 3.
// let multiplyToSeven = [];
// const multiplySeven = () => {
//   for (let i = 2; i <= 10; i++) {
//     multiplyToSeven.push(`7 * ${i} = ${7 * i}`);
//   }
// };
// multiplySeven();
// console.log(multiplyToSeven);

// 4
// let summary = 0;
// const integerNum = () => {
//   for (let i = 1; i <= 15; i++) {
//     summary += i;
//   }
// };
// integerNum();
// console.log(summary);

// 5
// let summaryAllMultiplyNum = 1;
// const multiplyAllNum = () => {
//   for (let i = 15; i <= 35; i++) {
//     summaryAllMultiplyNum *= i;
//   }
// };
// multiplyAllNum();
// console.log(summaryAllMultiplyNum);

// 6
// let meedleValNums = 0;
// let summary = 0;
// let total = 500;
// const meedleVal = () => {
//   for (let i = 1; i <= total; i++) {
//     summary += i;
//   }
//   meedleValNums = summary / total;
// };
// meedleVal();
// console.log(meedleValNums);

// 7
// let evenNum = 0;
// const evenNumbers = () => {
//   for (let i = 30; i <= 80; i++) {
//     if (i % 2 === 0) {
//         evenNum += i
//     }
//   }
// };
// evenNumbers();
// console.log(evenNum);

// 8
// const evenNumberThree = () => {
//   for (let i = 100; i <= 200; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
//   }
// };
// evenNumberThree();

// 9
// const number = prompt("enter some numbers");
// let devidersNum = [];
// const dewideNumber = () => {
//   for (let i = 1; i <= +number; i++) {
//     if (+number % i === 0) {
//         devidersNum.push(i);
//     }
//   }
// };
// dewideNumber();
// console.log("devidersNum", devidersNum);

// 10
// const number = prompt("enter some numbers");
// let evenDevidersNum = [];
// const evenDewideNumber = () => {
//   for (let i = 1; i <= +number; i++) {
//     if (+number % i === 0 && i % 2 === 0) {
//         evenDevidersNum.push(i);
//     }
//   }
// };
// evenDewideNumber();
// console.log("summDevidersNum", evenDevidersNum.length);

// 11
// const number = prompt("enter some numbers");
// let evenSummNum = 0;
// const evenDewideNumber = () => {
//   for (let i = 1; i <= +number; i++) {
//     if (+number % i === 0 && i % 2 === 0) {
//         evenSummNum += i;
//     }
//   }
// };
// evenDewideNumber();
// console.log("summDevidersNum", evenSummNum);

// 12
let multiplyTable = [];
const multiplySeven = () => {
  for (let i = 2; i <= 10; i++) {
    for(let y = 2; y <=10; y++) {
        multiplyTable.push(`${i} * ${y} = ${i * y}`);
    }
  }
};
multiplySeven();
console.log(multiplyTable.join("\n"));