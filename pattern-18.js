function printPattern(n) {
  let string = "";
  let ch = "E";
  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - i - 1; j >= 0; j--) {
      let charNum = ch.charCodeAt(ch) - j;
      let char = String.fromCharCode(charNum);
      string += char;
    }
    string += "\n";
  }

  console.log(string);
}

printPattern(5);
