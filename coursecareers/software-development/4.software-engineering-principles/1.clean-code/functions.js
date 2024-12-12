// split functions in to as many larger funtions as you can

function calculateTotal(cart) {
  let total = 0;

  for (let item of cart) {
    let price = item.price;
    if (item.isTaxable) price = price * 1.1;
    if (item.discount) price = price - item.discount;
    total += price;
  }
  return total;
}
