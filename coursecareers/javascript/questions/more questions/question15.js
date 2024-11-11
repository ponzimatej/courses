function isPalindrome(str) {
  let newStr = str.replace(/[^a-zA-Z0-9]/g, "");

  let revereseStr = newStr.split("").reverse().join("");

  if (newStr === revereseStr) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isPalindrome("!!a!!!a!");
