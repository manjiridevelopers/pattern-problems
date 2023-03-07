function printPattern(n) {
  let string = "";
  let count = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      let cur = count.toString();
      string += cur + " ";
      count++;
    }
    string += "\n";
  }

  console.log(string);
}

printPattern(5);
