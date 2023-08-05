function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let sum = 0;
    for (let i = 0; i < classPoints.length; i++) {
      sum = sum + classPoints[i];
    };
   let average = sum / classPoints.length;
   let result;
   average < yourPoints ? result = true : result = false;
   
   return result;
  }

  console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88],25));
  