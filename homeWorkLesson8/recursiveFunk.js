const number = prompt("enter first number");
const degree = prompt("enter degree");

function degreeRec(number, degree) {
  if (degree === 0) {
    return 1;
  } else {
    return number * degreeRec(number, degree - 1);
  }
}

const result = degreeRec(number, degree);
console.log("result", result);
