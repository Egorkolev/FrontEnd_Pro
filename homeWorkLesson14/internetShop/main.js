const electonicsBtn = document.getElementById("btn1");
const appliancesBtn = document.getElementById("btn2");
const phonesBtn = document.getElementById("btn3");
const computersBtn = document.getElementById("btn4");
const allBtn = document.getElementById("all");
const mainContent = document.querySelector(".mainContent");
const description = document.querySelector(".description");

let shopData = [];
let basketData = [];

async function getData() {
  try {
    const response = await fetch("./shopData.json");
    data = await response.json();
    const parseData = await data.shopData.map((item) => item);
    shopData.push(...parseData);
    App();
    console.log(shopData);
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
    shopData = data.shopData.filter((item) =>
      item.section.includes("phones")
    );
    crearMainContent();
    App();
  });

  computersBtn.addEventListener("click", () => {
    shopData = data.shopData.filter((item) =>
      item.section.includes("computers")
    );
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
