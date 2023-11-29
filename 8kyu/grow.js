function grow(arr){
    let result = arr[0];
    for (let i = 1; i < arr.length; i++){
        result *= arr[i];
    }
    return result;
}
console.log(grow([4, 1, 1, 1, 4]));