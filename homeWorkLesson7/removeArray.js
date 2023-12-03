const array = [1, 2, 3, 4, 5, 6, 7];

const removeElement = (array, num) => {
    const index = array.indexOf(num);
    if(index !== -1) {
        array.splice(index, 1)
    } else {
        console.log("there is no item what you are looking for");
    }
}
removeElement(array, 5 );
console.log(array);