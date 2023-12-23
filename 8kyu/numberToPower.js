function numberToPower(number, power){
    
    // Code here
    let total = 1;
  for (let i = 1; i <= power; i++) { 
    total = total * number;
  }
  return total;
  }
  console.log(numberToPower(4, 2));