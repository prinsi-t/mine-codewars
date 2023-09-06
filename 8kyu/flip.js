const flip=(d, a)=>{
    //TODO
    
   
   if (d === 'R'){
    return a.sort((x,y) => x - y);
   }else if(d === 'L'){
    return a.sort((x,y) => y - x);
   }
  // return d === "R" ? a.sort(function(x, y){return x-y}) : a.sort(function(x, y){return y-x})
   
  }
console.log(flip('L',[1,4,9,5]));
 