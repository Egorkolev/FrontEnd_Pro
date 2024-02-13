const electonicsBtn = document.getElementById("electonicsBtn");
const appliancesBtn = document.getElementById("appliancesBtn");
const phonesBtn = document.getElementById("phonesBtn");
const computersBtn = document.getElementById("computersBtn");
const allBtn = document.getElementById("all");
const mainContent = document.querySelector(".mainContent");
const description = document.querySelector(".description");
const myOrders = document.getElementById("myOrders");

let shopData = [];
let basketData = [];
let myStore = [];

async function getData() {
  try {
    const response = await fetch("./shopData.json");
    data = await response.json();
    const parseData = await data.shopData.map((item) => item);
    shopData.push(...parseData);
    App();
  } catch (error) {
    console.error("fetch Error", error);
  }
}
getData();

const crearMainContent = () => {
  mainContent.innerHTML = "";
};

all.addEventListener("click", () => {
  shopData = data.shopData;
  crearMainContent();
  App();
});

electonicsBtn.addEventListener("click", () => {
  shopData = data.shopData.filter((item) =>
    item.section.includes("electonics")
  );
  crearMainContent();
  App();
});

appliancesBtn.addEventListener("click", () => {
  shopData = data.shopData.filter((item) =>
    item.section.includes("appliances")
  );
  crearMainContent();
  App();
});

phonesBtn.addEventListener("click", () => {
  shopData = data.shopData.filter((item) => item.section.includes("phones"));
  crearMainContent();
  App();
});

computersBtn.addEventListener("click", () => {
  shopData = data.shopData.filter((item) => item.section.includes("computers"));
  crearMainContent();
  App();
});

function App() {
  const filterItemBasket = (array, id) => {
    return array.filter((item) => item.id !== id);
  };

  const alertNote = (id) => {
    mainContent.innerHTML += `<div><div id="liveAlertPlaceholder"><div><div class="alert alert-success alert-dismissible" role="alert">   <div>Your order ID = ${id} was Successfuly ordered</div>   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div></div></div>`;
  };

  mainContent.innerHTML +=
    shopData &&
    shopData?.map((item) => {
      return `<div class="card" style="width: 220px">
      <img src="./img/${item.img}.webp" class="card-img-top" alt="Item" />
      <div class="card-body">
        <h5 class="card-title">$${item.price}</h5>
        <p class="card-text">
        ${item.description}
        </p>
        <button class="btn btn-primary basketBtn" data-item-id="${item.id}">Add to Basket</button>
      </div>
    </div>`;
    });

  const basketBtn = document.querySelectorAll(".basketBtn");
  basketBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const itemId = e.target.dataset.itemId;
      const itemAdd = shopData?.find((item) => item.id === parseInt(itemId));
      if (basketData.some((item) => item.id === itemAdd.id)) {
        basketData.filter((item) => item.id !== itemAdd.id);
      } else {
        basketData.push(itemAdd);
        function updateBasket() {
          description.innerHTML = basketData.map((item) => {
            return `<div class="basketItem">
                  <img src="./img/${item.img}.webp" style="width: 80px !important; height: auto !important" class="card-img-top" alt="Item" />
                  <p>${item.description}</p>
                  <button type="button" id="liveAlertBtn" class="btn btn-primary buyBtn" data-item-id="${item.id}">
                      Buy 
                  </button>
                  </div>`;
          });

          const buyBtn = document.querySelectorAll(".buyBtn");
          buyBtn.forEach((btn) => {
            btn.addEventListener("click", (e) => {
              const itemId = parseInt(e.target.dataset.itemId);
              alertNote(itemId);
              setLocalStore(itemId);
              basketData = filterItemBasket(basketData, itemId);
              App();
              updateBasket();
            });
          });
        }
        updateBasket();
      }
    });
  });
}

const setLocalStore = (itemId) => {
  let itemArray = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];
  let item = shopData.find((item) => item.id === itemId);
  let addTimeDate = {
    ...item,
    time: new Date().toLocaleString(),
  };
  itemArray.push(addTimeDate);
  localStorage.setItem("items", JSON.stringify(itemArray));
};

const successFunction = () => {
  localStorage.removeItem("items");
  mainContent.innerHTML = "";
  mainContent.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Hi there!</strong> Your order was successfully coplited, Congratulate.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
};

const orderBtn = document.createElement("button");
orderBtn.setAttribute("type", "button");
orderBtn.setAttribute("class", "btn btn-outline-primary orderBtn");
orderBtn.innerText = "MAKE ORDER";

myOrders.addEventListener("click", () => {
  let getStore = JSON.parse(localStorage.getItem("items"));
  mainContent.innerHTML = "";
  mainContent.innerHTML +=
    getStore &&
    getStore?.map((item) => {
      return getStore.length > 0
        ? `<div class="card mb-3" style="max-width: 540px;">
              <div class="row g-0">
                <div class="col-md-4">
                <svg class="hart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                  <img src="./img/${item.img}.webp" class="card-img-top" class="img-fluid rounded-start" alt="Item">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">$${item.price}</h5>
                    <p class="card-text">${item.description}</p>
                    <p class="card-text"><small class="text-body-secondary">Added: (<span class="date">${item.time}</span>)</small></p>
                  </div>
                </div>
              </div>
            </div>`
        : "No Orders Record Yet";
    });

  mainContent.appendChild(orderBtn);
  orderBtn.addEventListener("click", () => {
    const totalProce = getStore.reduce((acc, value) => {
      return acc + value.price;
    }, 0);
    mainContent.innerHTML += `
                                      <form class="formOrder">
                                        <div class="formInputBox">
                                          <div>
                                          <h4>Total Quantity <span style="color: green;">${getStore.length}</span></h3>
                                          </div>
                                          <div>
                                            <h4>Total Price <span style="color: green;">$${totalProce}</span></h3>
                                          </div>
                                        </div>
                                        <div class="mb-3 formInputBox">
                                          <label for="name" class="form-label">Firs and Last Name</label>
                                          <input type="text" class="form-control" required id="name" aria-describedby="nameHelp">
                                        </div>
                                        <select class="form-select" required aria-label="Default select example" id="city">
                                          <option value="" selected>Select your City</option>
                                          <option value="1">Odesa</option>
                                          <option value="2">Lviv</option>
                                          <option value="3">Mikolaiv</option>
                                          <option value="4">Kyiv</option>
                                        </select>
                                        <div class="mb-3 formInputBox">
                                          <label for="city" class="form-label">Enter your City Post Point </label>
                                          <input type="text" required class="form-control" id="postPoint">
                                        </div>
                                        <div class="formInputBox">
                                          <div class="mb-3 formInputBox">
                                            <label for="bankNumb" class="form-label">Bank account Number</label>
                                            <input type="number" required class="form-control" id="bankNumb">
                                          </div>
                                          <div class="mb-3 formInputBox">
                                            <label for="securityNumb" class="form-label">CCV</label>
                                            <input type="number" required class="form-control" id="securityNumb" placeholder="546">
                                          </div>
                                          <div class="mb-3 formInputBox">
                                            <label for="expireDate" class="form-label">Year / Month</label>
                                            <input type="number" required class="form-control" id="expireDate" placeholder="2026 / 05">
                                          </div>
                                        </div>
                                        <div class="mb-3 formInputBox">
                                          <label for="comment" class="form-label">Comment Order</label>
                                          <input type="textarea" class="form-control" id="comment" placeholder="Comment...">
                                        </div>
                                        <button type="submit" id="submitBtn" class="btn btn-primary">Submit</button>
                                      </form>`;

    const submitBtn = document.getElementById("submitBtn");
    const nameInput = document.getElementById("name");
    const cityInput = document.getElementById("city");
    const postPoint = document.getElementById("postPoint");
    const bankNumbInput = document.getElementById("bankNumb");
    const securityNumbInput = document.getElementById("securityNumb");
    const expireDateInput = document.getElementById("expireDate");

    submitBtn.addEventListener("click", () => {
      if (!nameInput.value) {
        alert("Please enter your name.");
        return;
      } else if (!cityInput.value || cityInput.value === "Select your City") {
        alert("Please select your city.");
        return;
      } else if (!postPoint.value) {
        alert("Please select your city Post Point.");
        return;
      } else if (!bankNumbInput.value) {
        alert("Please enter your bank number.");
        return;
      } else if (!securityNumbInput.value) {
        alert("Please enter your security number.");
        return;
      } else if (!expireDateInput.value) {
        alert("Please enter your expire date.");
        return;
      } else {
        successFunction();
      }
    });
  });
});
