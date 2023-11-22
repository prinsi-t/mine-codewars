String.prototype.toAlternatingCase = function () {
    // Define your method here :)
    arr = [];
    for (let i = 0; i < (this.length); i++){
        let char2 = this[i];
        if (char2 == char2.toUpperCase())
            char2 = char2.toLowerCase();
        else if (char2 == char2.toLowerCase())
            char2 = char2.toUpperCase();
            arr.push(char2);
    }
    return arr.join('');
   
  }
  //console.log(toAlternatingCase("HELLO WORLD"));