function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    let sum = marks.reduce((acc, c) => acc + c,0);
    let average = Math.floor(sum / marks.length);
    return average;
  }

  console.log(getAverage([2,2,2,2]));