function digitize(n) {
    //code here
    let newArr = String(n).split('').reverse().map((n) => {
        return Number(n);
    })
    return newArr;
  }
  console.log(digitize(22334));