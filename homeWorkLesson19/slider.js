const container = document.querySelector(".container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const list = document.querySelectorAll(".hide");

let num = 0;
prevBtn.addEventListener("click", () => {
  list[num].classList.remove("show");
  num = num -= 1;
  list[num].classList.add("show");
  if (num <= 0) {
    prevBtn.disabled = true;
  } else if (num <= list.length -1) {
    nextBtn.disabled = false;
  }
  console.log(num);
});
nextBtn.addEventListener("click", () => {
  list[num].classList.remove("show");
  num = num += 1;
  list[num].classList.add("show");
  if (num >= list.length -1) {
    nextBtn.disabled = true;
  } else if (num >= 0) {
    prevBtn.disabled = false;
  }
  console.log(num);
});
