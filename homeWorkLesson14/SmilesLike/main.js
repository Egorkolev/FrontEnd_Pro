const mainDiv = document.querySelector(".mainDiv");

const imgArr = ["1", "2", "3", "4", "5"];
const likes = Array(imgArr.length).fill(0);
mainDiv.innerHTML = imgArr.map((img, index) => {
  return `<div key="${index + 1}" class="smileContainer">
    <img class="imgSmile" src="./image/${img}.jpeg" alt="smile">
    <div class="like">${likes[index]}</div>
    </div>`;
});

mainDiv.addEventListener("click", (e) => {
  const clicked = e.target;
  if (clicked.className.includes("imgSmile")) {
        const smileContainer = clicked.closest(".smileContainer");
        const key = smileContainer.getAttribute("key");
        const index = imgArr.indexOf(key);
        if(index !== -1) {
            likes[index] ++
            likesCount();
        }
  }
});

const likesCount = () => {
    const likeElem = document.querySelectorAll(".like");
    likeElem.forEach((like, index) => {
        like.textContent = likes[index];
    })
};