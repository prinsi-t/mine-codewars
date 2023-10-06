function mergeArrays(a, b) {
    // your code here
    let contactedArr = a.concat(b)
  let arr = new Set(contactedArr)
  return Array.from( arr).sort((a,b)=>a-b)
  }
  