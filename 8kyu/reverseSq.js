const reverseSeq = n => {
    let arr = []
    for (let i = 0; n > 0; i++){
        arr += n;
    }
    return arr;
  };
  console.log(reverseSeq(5));