function uniTotal (string) {
    // total up dem unicodes!
    let sum = 0;
   
    for (let i = 0; i < string.length; i++){
        for (let j = 0; j < string[i].length; j++){
            const res = string[i].charCodeAt(j);
            sum += res;
        }
       
    }
    return sum;
    }
    console.log(uniTotal('aaa'));