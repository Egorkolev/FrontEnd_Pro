const person = [
  {
    id: 1,
    name: "Ivan",
    title:
      "Метод slice() возвращает новый массив, содержащий копию части исходного массива.",
  },
  {
    id: 2,
    name: "Andrey",
    title:
      "Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.",
  },
  {
    id: 3,
    name: "Anna",
    title:
      "Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.",
  },
];

const testimonials = document.getElementById("testimonials");

const testimonialsPerson = person.map((person) => {
  const block = document.createElement("div");
  const caption = document.createElement("h1");
  const parag = document.createElement("p");

  caption.textContent = person.name;
  parag.textContent = person.title;

  block.appendChild(caption);
  block.appendChild(parag);
  testimonials.appendChild(block);

  testimonials.style.padding = "15px";
  block.style.padding = "15px";
  block.style.margin = "15px";
  block.style.boxShadow = "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px";
});
