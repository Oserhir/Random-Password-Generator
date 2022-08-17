let result = document.getElementById("result");
let length = document.getElementById("length");

let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let generate = document.getElementById("generate");

let ArraysFromLowToHight = (min, max) => {
  let Arr = [];
  for (let i = min; i <= max; i++) {
    Arr.push(i);
  }
  return Arr;
};

let Ucase = ArraysFromLowToHight(65, 90);
let Lcase = ArraysFromLowToHight(97, 122);
let Num = ArraysFromLowToHight(48, 57);
let Syn = ArraysFromLowToHight(33, 38);

generate.addEventListener("click", () => {
  let initialPass = [];

  uppercase.checked ? (initialPass = [...initialPass, ...Ucase]) : "";
  lowercase.checked ? (initialPass = [...initialPass, ...Lcase]) : "";
  numbers.checked ? (initialPass = [...initialPass, ...Num]) : "";
  symbols.checked ? (initialPass = [...initialPass, ...Syn]) : "";

  let Password = "";
  for (let i = 0; i < Number(length.value); i++) {
    Password += randomPassword(initialPass);
  }
  result.innerText = Password;

  uppercase.checked = false;
  lowercase.checked = false;
  numbers.checked = false;
  symbols.checked = false;
});

let randomPassword = (initialPass) => {
  let RandomNumber = Math.floor(Math.random() * initialPass.length);
  return String.fromCharCode(initialPass[RandomNumber]);
};

let randomPass = (min, max) => {
  return String.fromCharCode(min + Math.floor(Math.random() * (max - min + 1)));
};
