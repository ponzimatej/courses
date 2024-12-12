function getPasswordStrength(password) {
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  let lowercase = getLowercase();
  let uppercase = getUppercase();

  let points = 0;

  if (password.length > 10) points++;

  for (letter of uppercase) {
    if (password.includes(letter)) {
      points++;
      break;
    }
  }

  for (letter of lowercase) {
    if (password.includes(letter)) {
      points++;
      break;
    }
  }

  for (number of numbers) {
    if (password.includes(number)) {
      points++;
      break;
    }
  }

  for (specialChar of special) {
    if (password.includes(specialChar)) {
      points++;
      break;
    }
  }

  let strength;
  switch (points) {
    case 3:
      strength = "medium";
      break;
    case 4:
      strength = "strong";
      break;
    case 5:
      strength = "very strong";
      break;
    default:
      strength = "weak";
      break;
  }
  return strength;
}

function getLowercase() {
  let lowercase = [];
  for (let i = 0; i < 26; i++) {
    lowercase.push(String.fromCharCode(i + 97));
  }
  return lowercase;
}

function getUppercase() {
  let uppercase = [];
  for (let i = 0; i < 26; i++) {
    uppercase.push(String.fromCharCode(i + 65));
  }
  return uppercase;
}

let password = "";
console.log(getPasswordStrength(password));
