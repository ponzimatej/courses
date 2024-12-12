function compressString(str) {
  const charsInString = str.split("");
  let arr = [];
  let amt = 1;
  let answer = "";

  for (const [idx, char] of charsInString.entries()) {
    arr.push(char);
    if (arr[idx - 1] !== char) {
      if (amt > 1) {
        answer += amt;
        amt = 1;
      }
      answer += char;
    } else if (arr[idx - 1] === char) {
      amt++;
    }
    if (idx === charsInString.length - 1 && amt > 1) {
      answer += amt;
    }
  }
  console.log(answer);
}

compressString("aaaaaaaaaaab");
