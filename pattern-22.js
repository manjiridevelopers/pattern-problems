function printPattern(n) {
  let string = "";

  for (let i = 0; i < 2 * n - 1; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      let top = i;
      let left = j;
      let bottom = 2 * n - 2 - i;
      let right = 2 * n - 2 - j;

      let num = Math.min(Math.min(top, bottom), Math.min(left, right));
      string += num + " ";
    }
    string += "\n";
  }

  console.log(string);
}

printPattern(5);

/*

function printPattern(n){
    let string = ""

    for(let i = 0; i < 2 * n - 1; i++){
      for(let j = 0; j < 2 * n - 1; j++){
        let top = i;
        let left = j;
        let bottom = (2 * n - 2) - i;
        let right = (2 * n - 2) - j;

        let num = n - Math.min(Math.min(top, bottom), Math.min(left, right))
        string += num + " " 
      }
      string += "\n"
    }

    console.log(string)
}


printPattern(5);

*/
