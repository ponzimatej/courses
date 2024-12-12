const buttons = document.querySelectorAll("button");

buttons.forEach((button) => button.addEventListener("click", calc));

let mainNumber = "";
let operator = "";
let otherNumber = "";
let isFirstNum = true;

function calc(event) {
  const clickedButton = event.target.id;
  const buttonType = buttonIs(clickedButton);

  checkButtonType(buttonType, clickedButton);
}

function checkButtonType(buttonType, clickedButton) {
  switch (buttonType) {
    case "number":
      if (isFirstNum) {
        mainNumber += clickedButton;
        updateResultLine(clickedButton);
      }
      if (!isFirstNum) {
        otherNumber += clickedButton;
        updateResultLine(clickedButton);
      }
      break;

    case ".":
      if (isFirstNum) {
        if (mainNumber.includes(".")) {
          alert("You can't put two '.'");
          break;
        }
        mainNumber += clickedButton;
        updateResultLine(clickedButton);
      }
      if (!isFirstNum) {
        if (otherNumber.includes(".")) {
          alert("You can't put two '.'");
          break;
        }
        otherNumber += clickedButton;
        updateResultLine(clickedButton);
      }
      break;

    case "operator":
      if (operator === "") {
        operator += clickedButton;
        updateResultLine(` ${clickedButton}  `);
        isFirstNum = false;
      } else {
        alert("There is already an operator in place");
      }
      break;

    case "C":
      clear(["all"]);
      break;

    case "equals":
      math(mainNumber, otherNumber, operator);
      break;
  }
}

function buttonIs(id) {
  if (id === "+" || id === "-" || id === "*" || id === "/") {
    return "operator";
  } else if (id === "=") {
    return "equals";
  } else if (id === "C") {
    return "C";
  } else if (id === ".") {
    return ".";
  } else {
    return "number";
  }
}

function clear(what) {
  if (what[0] === "all")
    clear(["result", "mainNumber", "operator", "otherNumber", "isFirstNum"]);
  for (value of what) {
    switch (value) {
      case "result":
        updateResultLine("clear");
        break;
      case "mainNumber":
        mainNumber = "";
        break;
      case "operator":
        operator = "";
        break;
      case "otherNumber":
        otherNumber = "";
        break;
      case "isFirstNum":
        isFirstNum = true;
        break;
    }
  }
}

function math(num1, num2, operator) {
  num1 = Number(num1);
  num2 = Number(num2);
  if (!operator) {
    if (num1) {
      result = num1;
    } else {
      result = 0;
    }
  }
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }
  mainNumber = result.toString();
  clear(["result", "operator", "otherNumber", "isFirstNum"]);
  updateResultLine(mainNumber);
}

function updateResultLine(val) {
  const resultLine = document.getElementById("result-line");
  if (val === "clear") {
    resultLine.innerHTML = "";
  } else {
    resultLine.innerText += val;
  }
}
