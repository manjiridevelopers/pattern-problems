function printPattern(n) {
  let string = "";
  let space = 2 * (n - 1);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      string += j + " ";
    }

    for (let j = 1; j <= space; j++) {
      string += "  ";
    }
    for (let j = i; j >= 1; j--) {
      string += j + " ";
    }

    space -= 2;
    string += "\n";
  }

  console.log(string);
}

printPattern(5);
