function findLongestWord(sentence) {
  let wordCount = 0;
  let words = [""];

  for (char of sentence) {
    if (char !== " ") {
      if (!words[wordCount]) words[wordCount] = "";
      words[wordCount] += char;
    } else {
      wordCount++;
    }
  }

  let longest = "";
  for (one of words) {
    if (one.length > longest.length) longest = one;
  }
  console.log(longest);
}

findLongestWord("");
