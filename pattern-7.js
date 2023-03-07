function printPattern(n) {
  let string = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      string += " ";
    }

    for (let j = 0; j < 2 * i + 1; j++) {
      string += "*";
    }
    for (let j = 0; j < n - i - 1; j++) {
      string += " ";
    }
    string += "\n";
  }

  console.log(string);
}

printPattern(5);

/* HIT & TRIAL */

function printPatternHit() {
  let string = "";
  let row = 5;
  let col = 10;
  let mid = col / 2 - 1;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let lowEnd = mid - i;
      let highEnd = mid + i;
      if (j < lowEnd || j > highEnd) string += " ";
      else string += "*";
    }
    string += "\n";
  }

  console.log(string);
}

printPatternHit(5);
