function findMultiples(int, l) {
    //your code here
    let multiples = [];
    for (let i = int; i <= l; i += int){
        multiples.push(i);
    }
    return multiples;
  }
  console.log(findMultiples(5,55));

  