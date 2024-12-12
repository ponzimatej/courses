function findUniqueCharacters(str) {
  let unique = "";
  let characters = [];
  for (char of str) {
    characters.push(char);
  }

  for (element of characters) {
    el = characters.shift();
    if (!characters.includes(el)) {
      unique += el;
    }
    characters.push(el);
  }

  console.log(unique);
}

findUniqueCharacters("AaBbCc");
