// const year = prompt("enter your Year of Bearth - (yyyy)");
// const city = prompt("enter the city where are you living now");
// const sport = prompt("enter your favorite tipe of sport");

let age;
let livingCity;
let favoriteSport;

if (year.length === 0) {
  age = "Шкода, що Ви не захотіли ввести свой рік народження";
} else {
  age = 2023 - +year;
}

switch (city) {
  case "Київ":
    livingCity = "Ти живеш у столиці УкраЇни";
    break;
  case "Вашингтон":
    livingCity = "Ти живеш у столиці США";
    break;
  case "Лондон":
    livingCity = "Ти живеш у столиці АнгліЇ";
    break;
  case "":
    livingCity = "Шкода, що Ви не захотіли ввести своє місто";
    break;
  default:
    livingCity = `Ти живеш у місті ${city}`;
    break;
}

switch (sport) {
  case "Футбол":
    favoriteSport = "Круто! Хочеш стати як Мессі";
    break;
  case "Бокс":
    favoriteSport = "Круто! Хочеш стати як Усик";
    break;
  case "Теніс":
    favoriteSport = "Круто! Хочеш стати як Шарапова";
    break;
  case "":
    favoriteSport = "Шкода, що Ви не захотіли ввести свій улюблкний вид спорту";
    break;
  default:
    favoriteSport = `Твій улюблений вид спорту це ${sport}`;
    break;
}

alert(
  `${age}
${livingCity}
${favoriteSport}
`
);
