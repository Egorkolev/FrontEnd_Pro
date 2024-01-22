let imgElem = document.createElement("img");
let button = document.querySelector(".button");

let imgCount = 1;
  imgElem.src = `./img/${imgCount}.jpg`;
  imgElem.alt = "some img";
  imgElem.style.width = "400px";

button.addEventListener("click", function () {
  imgCount = Math.floor(Math.random() * 9) + 1;
  imgElem.src = `./img/${imgCount}.jpg`;
});

document.body.appendChild(imgElem);
