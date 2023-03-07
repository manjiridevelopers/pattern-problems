function printPattern(n) {
  let string = "";

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j <= i; j++) {
      string += "*";
    }

    for (let j = n - i; j > 0; j--) {
      if (j != 1) string += "  ";
    }

    for (let j = 0; j <= i; j++) {
      string += "*";
    }
    string += "\n";
  }

  for (let i = 0; i < n; i++) {
    for (let j = n; j > i; j--) {
      string += "*";
    }

    for (let j = 0; j <= i; j++) {
      if (j != 0) string += "  ";
    }

    for (let j = n; j > i; j--) {
      string += "*";
    }
    string += "\n";
  }

  console.log(string);
}

printPattern(5);
