function stringy(size) {
    // your code here
    let str = '';
    
    for (let i = 1; i <= size; i++){
        str = str + i % 2;
    }
    return str;
  }
  console.log(stringy(4));