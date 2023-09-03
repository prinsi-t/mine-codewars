function lowercaseCount(str){
    //How many?
  
    let lower = 0;
    
    for (const char of str){
        if (char.match(/[a-z]/)){
            lower += 1;
        }
    }
    return lower;
}

console.log(lowercaseCount('jjjddP'));