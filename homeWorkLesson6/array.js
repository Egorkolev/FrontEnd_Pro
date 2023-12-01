const lengthArray = prompt("enter the length of array");

const arrayFunc = () => {
  const newArr = [];
    for (let i = 1; i <= +lengthArray; i++) {
        let elementArray = prompt(`enter the ${i} digit of array`);
        newArr.push(elementArray);
    }
    console.log(newArr); 
    let sortArr = newArr.sort();
    console.log(sortArr);
    newArr.splice(1, 3);
    console.log(newArr);

};
arrayFunc();