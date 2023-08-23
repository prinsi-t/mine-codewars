function arrayPlusArray(arr1, arr2) {
    let newArr = arr1.concat(arr2);
    let sum = newArr.reduce(function(acc,c){
        return (acc + c);
    })
    return sum
  }

  console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));