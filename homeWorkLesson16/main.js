const container = document.querySelector(".container");

const xhr = new XMLHttpRequest();
const url =
  "http://api.openweathermap.org/data/2.5/weather?q=ODESA&units=metric&APPID=5d066958a60d315387d9492393935c19";

let data;

xhr.open("GET", url, true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const responseData = JSON.parse(xhr.responseText);
    renderWeather(responseData);
  }
};
xhr.send();

const renderWeather = (data) => {
  console.log(data);
  let weather = data.weather[0];
  console.log(weather);

  container.innerHTML = `      <div class="weatherBox">
                                    <img class="img" src="./odessa.jpeg" alt="odessa" />
                                    <div class="imgBox">
                                        <h2 class="caption">${data.name}</h2>
                                        <h2>${weather.description}</h2>
                                        <div class="tempr">
                                        <h3>${data.main.temp.toFixed(0)}&deg;C</h3>
                                        <img
                                            class="imgWeather"
                                            src="http://openweathermap.org/img/w/${weather.icon}.png"
                                            alt="odessa"
                                        />
                                        </div>
                                    </div>
                                    <div class="infoBox">
                                        <div class="info">
                                        <div class="info2">
                                            <h3>Pressure</h3>
                                            <h3>${data.main.pressure}</h3>
                                        </div>
                                        <div class="info2">
                                            <h3>Humidity</h3>
                                            <h3>${data.main.humidity}</h3>
                                        </div>
                                        </div>
                                        <div class="info">
                                        <div class="info2">
                                            <h3>Speed</h3>
                                            <h3>${data.wind.speed}</h3>
                                        </div>
                                        <div class="info2">
                                            <h3>Deg</h3>
                                            <h3>${data.wind.deg}&deg;</h3>
                                        </div>
                                        </div>
                                    </div>
                                </div>`;
};
