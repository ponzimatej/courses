function countVowelsAndConsonants(inputString) {
  const obj = {
    vowels: 0,
    consonants: 0,
  };
  inputString = inputString.toLowerCase();
  for (char of inputString) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      obj.vowels += 1;
    } else if (
      char === "b" ||
      char === "c" ||
      char === "d" ||
      char === "f" ||
      char === "g" ||
      char === "j" ||
      char === "k" ||
      char === "l" ||
      char === "m" ||
      char === "n" ||
      char === "p" ||
      char === "q" ||
      char === "s" ||
      char === "t" ||
      char === "v" ||
      char === "x" ||
      char === "z" ||
      char === "h" ||
      char === "r" ||
      char === "w" ||
      char === "y"
    ) {
      obj.consonants += 1;
    }
  }
  console.log(obj);
}

countVowelsAndConsonants("aeiou");
