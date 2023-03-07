function printPattern(n) {
  let string = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= n - i - 1; j++) {
      let cur = String.fromCharCode(j + 65);
      string += cur + " ";
    }
    string += "\n";
  }

  console.log(string);
}

printPattern(5);
