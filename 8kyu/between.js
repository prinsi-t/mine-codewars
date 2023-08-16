function between(a, b) {
    // your code here
    let result = []
    for (let i = a; i < b + 1; i++){
        result.push(i);
    }
   return result;
  }

  console.log(between(1,4));