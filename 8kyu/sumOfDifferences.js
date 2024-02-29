
function sumOfDifferences(arr) {
    arr.sort(function(a, b){return b - a});
    let diff = 0
    for(let i = 0; i <= arr.length - 2; i++){
        diff = diff + (arr[i] - arr[i + 1])
    }
    return diff
  }

  console.log(sumOfDifferences([0, 0 , 0]));