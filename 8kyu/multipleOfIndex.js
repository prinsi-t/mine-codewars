function multipleOfIndex(array) {
    // good luck
    let res = [];

    for (let i = 1; i < 1 < array.length; i++){
        if (array[i] % i === 0){
            res.push(array[i]);
        }
    }
    return res;
  }
  console.log(multipleOfIndex([0, 2, 3, 6, 9]));