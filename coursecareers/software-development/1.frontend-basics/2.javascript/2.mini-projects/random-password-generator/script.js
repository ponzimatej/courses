import {
  lowercaseArr,
  uppercaseArr,
  numbersArr,
  specialArr,
} from "./arrays.js";

function generatePassword(event) {
  event.preventDefault();

  const isLowercase = document.getElementById("lowercase").checked;
  const isUppercase = document.getElementById("uppercase").checked;
  const isNumbers = document.getElementById("numbers").checked;
  const isSpecial = document.getElementById("special").checked;
  const passwordLengthVal = document.getElementById("passwordLength").value;
  const passwordLength = Number(passwordLengthVal);
  const finalPassword = document.getElementById("password");

  let password = "";

  if (passwordLength === 0) {
    alert("You need to enter password length");
    return;
  }

  if (!isLowercase && !isUppercase && !isNumbers && !isSpecial) {
    alert("You need to check at least one box");
    return;
  }

  let arr = [];
  if (isLowercase) lowercaseArr.map((x) => arr.push(x));
  if (isUppercase) uppercaseArr.map((x) => arr.push(x));
  if (isNumbers) numbersArr.map((x) => arr.push(x));
  if (isSpecial) specialArr.map((x) => arr.push(x));

  for (let i = 1; i <= passwordLength; i++) {
    let num = randomNum(arr.length);
    password += arr[num];
  }
  finalPassword.innerHTML = password;
}

function randomNum(x) {
  return Math.floor(Math.random() * x);
}

document
  .getElementById("submitButton")
  .addEventListener("click", generatePassword);
