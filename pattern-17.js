function printPattern(n) {
  let string = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      string += " ";
    }

    let count = -1;
    let breakpoint = (2 * i + 1) / 2;

    for (let j = 0; j < 2 * i + 1; j++) {
      if (j <= breakpoint) count++;
      else count--;

      let cur = String.fromCharCode(count + 65);

      string += cur;
    }
    for (let j = 0; j < n - i - 1; j++) {
      string += " ";
    }
    string += "\n";
  }

  console.log(string);
}

printPattern(5);
