function canFormPalindrome(string) {
  let str = string.replace(/[^a-zA-Z0-9]/g, "");
  let chars = str.split("");
  let map = new Map();
  let possibility = true;

  for (const char of chars) {
    if (!map.get(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  }

  let x = 0;
  for (i of [...map.values()]) {
    if (i % 2 === 1) {
      x++;
    }

    if (x > 1) {
      console.log(false);
      console.log(string);
      return;
    }
  }
  console.log(possibility);
  console.log(string);
}

canFormPalindrome("longerstringwithrepeatingcharactersbutnopossiblepalindrome");
