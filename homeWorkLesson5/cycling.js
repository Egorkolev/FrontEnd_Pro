// 1.
let list = document.getElementsByClassName("list");

let numbersString = [];

const numbString = () => {
  for (let i = 10; i <= 20; i++) {
    numbersString.push(i);
  }
};
numbString();

const renderStruing = () => {
  for (let i = 0; i <= numbersString.length; i++) {
    list[i].innerHTML = numbersString.join(", ");
  }
};
renderStruing();

// 2.
