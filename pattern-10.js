function printPattern(n) {
  let string = "";

  for (let i = 1; i <= 2 * n - 1; i++) {
    let stars = i;
    if (i > n) stars = 2 * n - i;
    for (let j = 1; j <= stars; j++) {
      string += "*";
    }
    string += "\n";
  }

  console.log(string);
}

printPattern(5);
