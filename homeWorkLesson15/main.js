const input = document.getElementById("input");
const buttonData = document.getElementById("button-addon2");
const buttonComments = document.getElementById("button-addon3");
const alertMessage = document.getElementById("alert");
const content = document.querySelector(".content");

let commentData = false;

const searchData = (postId) => {
  const getData = new Promise((res, rej) => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}${
        commentData ? "/comments" : ""
      }`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Fatch data error ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        res(data);
      })
      .catch((error) => {
        rej(error);
      });
  });

  getData
    .then((data) => {
      postData = data;
      renderData(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

const renderData = (data) => {
  console.log(data);
  if (data.userId) {
    content.innerHTML = `<div class="card myCard" style="width: 18rem;height: fit-content;">
        <div class="card-body">
          <h5 class="card-title">Post ${data.id}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">${data.title}</h6>
          <p class="card-text">${data.body}</p>
        </div>
      </div>`;
  } else {
    if (input.value != 0) {
      const commentBox = document.createElement("div");
      commentBox.classList.add("commentBox");
      commentBox.innerHTML = data.map((item) => {
        return `<div class="card">
                    <h5 class="card-header">${item.id}</h5>
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.body}</p>
                    </div>
                </div>`;
      });
      content.appendChild(commentBox);
    }
    input.value = "";
    commentData = false;
  }
};

buttonData.addEventListener("click", () => {
  let postIdVal = input.value;
  let postId;
  if (postIdVal < 1 || postIdVal > 100 || postIdVal === "") {
    content.innerHTML = "";
    alertMessage.innerHTML = `<div class="alert alert-danger" role="alert">
    Please search post id renge between 1 - 100
</div>`;
  } else {
    alertMessage.innerHTML = "";
    postId = postIdVal;
    searchData(postId);
  }
});

buttonComments.addEventListener("click", () => {
  commentData = true;
  searchData(postData.id);
});
