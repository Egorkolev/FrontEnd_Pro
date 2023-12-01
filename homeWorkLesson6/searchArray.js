// 1
const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];
const positiveArr = arr.filter((item) => item >= 0);
console.log(positiveArr);
console.log(positiveArr.length);

let summPositive = 0;
const summArr = () => {
  for (let i = 0; i < positiveArr.length; i++) {
    summPositive += +positiveArr[i];
  }
};
summArr();
console.log(summPositive);

// 2
let minNum = arr[0];
let index = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < minNum) {
    minNum = arr[i];
    index = i;
  }
}
console.log("min number and index", minNum, ",", index);
// 3
let maxNum = arr[0];
let indexMax = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxNum) {
    maxNum = arr[i];
    indexMax = i;
  }
}
console.log("max number and index", maxNum, ",", indexMax);

// 4
const negativeArr = arr.filter((item) => item < 0);
console.log(negativeArr);
console.log("negotive elements", negativeArr.length);

// 5
const odd = positiveArr.filter((item) => item % 2 !== 0);
console.log("odd numbers lendth", odd.length);

// 6
const even = positiveArr.filter((item) => item % 2 === 0);
console.log("even numbers lendth", even.length);

// 7
evenTotalVal = 0;
for (let i = 0; i < even.length; i++) {
  evenTotalVal += even[i];
}
console.log("evenTotalVal", evenTotalVal);

// 8
oddTotalVal = 0;
for (let i = 0; i < odd.length; i++) {
  oddTotalVal += odd[i];
}
console.log("oddTotalVal", oddTotalVal);

// 9
totalMultiply = 1;
for (let i = 0; i < positiveArr.length; i++) {
  if (positiveArr[i] > 0) {
    totalMultiply *= positiveArr[i];
  }
}
console.log("totalMultiply", totalMultiply);

// 10
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== maxNum) {
    arr[i] === 0;
  }
}
console.log(arr);