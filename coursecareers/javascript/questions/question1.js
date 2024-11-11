function oddEven() {
  let num = document.getElementById("input").value;
  const answer = document.getElementById("answer");
  if (num % 2 === 0) {
    answer.innerHTML = "Number " + num + " is an even number.";
  } else {
    answer.innerHTML = "Number " + num + " is an odd number.";
  }
}
