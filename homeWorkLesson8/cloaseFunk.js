function cloaseFunk () {
  let sum = 0;

  return function (val) {
    sum += val;
    return sum;
  };
}

const sumFunk = cloaseFunk();
console.log(sumFunk(3));
console.log(sumFunk(5));
console.log(sumFunk(2));
