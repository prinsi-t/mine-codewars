function neutralise(s1, s2) {
    // Here be dragons!
    let res = '';

    for (let i = 0; i < s1.length; i++){
        if (s1[i] === s2[i]){
            res += s1[i] 
        } else {
            res += 0;
        }
    }

    return res;
  }
  console.log(neutralise("-----", "-----"));