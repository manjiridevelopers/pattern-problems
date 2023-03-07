function printPattern(n) {
  let string = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      string += " ";
    }

    for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
      string += "*";
    }
    for (let j = 0; j < i; j++) {
      string += " ";
    }
    string += "\n";
  }

  console.log(string);
}

printPattern(5);
