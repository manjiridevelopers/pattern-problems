function printPattern(n) {
  let string = "";
  for (let i = 0; i < n; i++) {
    let count = 0;

    for (let j = 0; j <= i; j++) {
      let cur = String.fromCharCode(i + 65);
      string += cur + " ";
    }
    string += "\n";
  }

  console.log(string);
}

printPattern(5);

/*

function printPattern(n){
    let string = ""
    for(let i = 0; i < n; i++){
        let count = 0

        for(let j = 0; j <= n - i - 1; j++){
          let cur = String.fromCharCode(i + 65)
          string+= cur + " "
        }
        string+="\n"
    }

    console.log(string)
}

printPattern(5);

*/
