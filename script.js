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
  result.innerText = generateRandomPassword();
});

let generateRandomPassword = () => {
  let L = Number(length.value);
  let text = "";
  for (let i = 0; i < L; i++) {
    text += randomPass(96, 126);
  }
  return text;
};

let randomPass = (min, max) => {
  return String.fromCharCode(min + Math.floor(Math.random() * (max - min + 1)));
};

console.log(String.fromCharCode(118));
