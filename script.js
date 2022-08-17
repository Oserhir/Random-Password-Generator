let result = document.getElementById("result");
let length = document.getElementById("length");
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let generate = document.getElementById("generate");

let Ucase = ArraysFromLowToHight(65, 90);
let Lcase = ArraysFromLowToHight(97, 122);
let Num = ArraysFromLowToHight(65, 90);
let Syn = ArraysFromLowToHight(48, 57);

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
