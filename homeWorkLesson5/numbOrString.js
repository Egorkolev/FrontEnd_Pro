// const numOrStr = prompt("nput number or string");

let checked;
if (numOrStr === null) {
  checked = "null";
} else if (numOrStr.trim() === "") {
  checked = "empty";
} else if (isNaN(+numOrStr)) {
  checked = "string";
}
console.log("checked", checked);

switch (checked) {
  case "null":
    alert("ви скасували");
    break;
  case "empty":
    alert("Empty String");
    break;
  case "string":
    alert(" number is Ba_NaN");
    break;
  default:
    alert("OK!");
    break;
}
