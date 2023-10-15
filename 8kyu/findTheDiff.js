function findDifference(a, b) {
    return Math.abs(a.reduce((a,b)=>a * b) - b.reduce((a,b)=> a * b))
  }
  console.log(findDifference([3, 2, 5], [1, 4, 4]));