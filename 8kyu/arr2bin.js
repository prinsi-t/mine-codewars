function arr2bin(arr){
    // show me the code
    if(arr.length === 0){
        return '0';
      }
      
      let sum = 0;
      
        for(let i = 0; i < arr.length; i++){
          if(typeof arr[i] === "number"){
             sum += arr[i];
          }
        }
        return sum.toString(2);
  }

  console.log(arr2bin([110]));