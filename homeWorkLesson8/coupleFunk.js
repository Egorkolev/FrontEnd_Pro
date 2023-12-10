// // 1
// const arr = prompt("enter eny numbers, simbols ore letters");
// const arrSplit = [...arr];
// const numbOnly = arrSplit.filter((numb) => parseFloat(numb));
// console.log(numbOnly);

// const sum = numbOnly.reduce((acc, value) => {
//   return acc + +value;
// }, 0);

// console.log(sum);
// const count = numbOnly.length;
// const totalNumb = sum / count;
// console.log(totalNumb);

// // 2
// const firtNum = prompt("enter first number");
// const znak = prompt("enter znak");
// const secondNum = prompt("enter second number");

// function calk(firtNum, znak, secondNum) {
//   let result;
//   switch (znak) {
//     case "+":
//       result = +firtNum + +secondNum;
//       break;
//     case "-":
//       result = +firtNum - +secondNum;
//       break;
//     case "*":
//       result = +firtNum * +secondNum;
//       break;
//     case "/":
//       result = +firtNum / +secondNum;
//       break;
//     case "%":
//       result = +firtNum % +secondNum;
//       break;
//     case "^":
//       result = +firtNum ^ +secondNum;
//       break;
//     default:
//         alert('No operation included');
//       break;
//   }
//   return resultA;
// }

// const resultA = calk(firtNum, znak, secondNum);
// console.log("result", resultA);

// // 3
// const firstArrLength = prompt('enter first array length');

// function fillArray (firstArrLength) {
//     let newArr = [];
//     for (let i = 0; i < firstArrLength; i++) {
//         let innerArrLength = prompt(`enter the ${i + 1} array value`);
//         let innerArr = [];

//         for (let j = 0; j < innerArrLength; j++ ) {
//             let fillArr = prompt(`enter the value of element ${j + 1} in array ${i + 1}`);
//             innerArr.push(fillArr);
//         }
//         newArr.push(innerArr);
//     }
//     return newArr;
// }

// const result = fillArray(firstArrLength);
// console.log(result);

// // 4
// function removeLetter(string, removeItem) {
//   const result = string.split('').filter(item => !removeItem.includes(item));

//   return result;
// }

// const string = prompt("enter some sentencice");
// const removeItem = prompt("enter letters or number which you want to remove");

// const resultI = removeLetter(string, removeItem);
// console.log(resultI);
