const electonicsBtn = document.getElementById("btn1");
const appliancesBtn = document.getElementById("btn2");
const phonesBtn = document.getElementById("btn3");
const computersBtn = document.getElementById("btn4");
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

myOrders.addEventListener("click", () => {
  let getStore = JSON.parse(localStorage.getItem("items"));
  console.log(getStore);
  mainContent.innerHTML = "";
  mainContent.innerHTML += `<button type="button" class="btn btn-outline-primary orderBtn">MAKE ORDER</button>`
  mainContent.innerHTML +=
    getStore &&
    getStore?.map((item) => {
      return `<div class="card mb-3" style="max-width: 540px;">
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
            </div>`;
    });
});
