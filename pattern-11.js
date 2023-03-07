function printPattern(n) {
  let string = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (i == 0) string += "1 ";
      else if ((i + j) % 2 == 0) string += "1 ";
      else string += "0 ";
    }
    string += "\n";
  }

  console.log(string);
}

printPattern(5);
