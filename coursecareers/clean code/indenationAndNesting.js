// Using built in functions

const numbers = [1, 2, 3, 4, 5];
let evenNumbers = [];

for (const number of numbers) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}

// |
// |
// |
// V

let numbers1 = [1, 2, 3, 4, 5];
let evenNumbers1 = numbers1.filter((number) => number % 2 === 0);

// Check for reverse conditions and return

function canViewContent(user) {
  if (user) {
    if (user.age) {
      if (user.age > 18) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// |
// |
// |
// V

function canViewContent1(user) {
  if (!user || !user.age || user.age < 18) {
    return false;
  }
  return true;
}

// random example

function calculatePrice(product, user, quantity, isSpecialDay) {
  let price = product.price * quantity;
  if (user) {
    if (user.isMember) {
      price = price * 0.9;
      if (quantity > 10) {
        price = price * 0.95;
      }
      if (isSpecialDay) {
        price = price * 0.95;
      }
    } else {
      if (isSpecialDay) {
        price = price * 0.95;
      }
    }
  }
  return price;
}

function calculatePrice1(product, user, quantity, isSpecialDay) {
  let price = product.price * quantity;

  if (!user.isMember) return isSpecialDay ? price * 0.95 : price;

  price = price * 0.9;
  if (quantity > 10) price = price * 0.95;
  if (isSpecialDay) price = price * 0.95;

  return price;
}
