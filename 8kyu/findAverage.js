function findAverage(array) {
    // your code here
    
   let n = 0;
   let average = 0;
   for (let i = 0; i < array.length; i++) {
        n += array[i]
        average = n / array.length;

   
   }
    
    if(array === []){
        return 0;
    }else{
        return average;
    }
   
 
  }
  console.log(findAverage([]));