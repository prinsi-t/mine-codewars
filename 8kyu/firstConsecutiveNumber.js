function firstNonConsecutive (arr) {
    let previous = arr[0];
    let first;
    for (let i = 1; i < arr.length; i++){
        if ((previous + 1) !== arr[i]){
            first = arr[i];
            break;
        }
        previous++;
    }
    return first !== undefined ? first : null;
}
console.log(firstNonConsecutive([1,2,3,4,6,7,8]));

/* function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1]
      }
    }
    return null
  } */