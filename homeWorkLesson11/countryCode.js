var codes = {
  $6: "Польща",

  $38: "Україна",

  $1: "США",
};

const objArr = Object.entries(codes);
objArr.forEach((value, key) => {
    console.log(`${key}: ${value}`);
})