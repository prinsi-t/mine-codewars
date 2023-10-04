function countPositivesSumNegatives(input) {
    // your code here
    
    if (input == null || input.length == 0)
      return [];
    
    let positive = 0;
    let negative = 0;
    
    for (let i=0, l=input.length; i<l; i++)
    {
      if (input[i] > 0){
        positive++;
      }else{
        negative += input[i];
      }
       
    }
    
    return [positive, negative];
  }
  console.log(countPositivesSumNegatives([]));