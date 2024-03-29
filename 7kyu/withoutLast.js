function withoutLast(arr) {
    let arr2 = arr.slice()
    arr2.pop();
    return arr2;
  }
  console.log(withoutLast([1, 2, 3, 4, 5]));