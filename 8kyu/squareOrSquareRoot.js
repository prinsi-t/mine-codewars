function squareOrSquareRoot(array) {
    let newVal = [];
    
    for (let i = 0; i < array.length; i++){
        let initial = array[i];
        let sqrt = Math.sqrt(initial);

        if( Number.isInteger(sqrt)){
            newVal.push(sqrt);
        }else{
            newVal.push(array[i] * array[i])
        }
    }
    return newVal;
  }
  console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ]));