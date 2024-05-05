

function bigToSmall(arr){
    //coding here...
   arr = [].concat(...arr);
    return arr.sort((a,b) => b - a).join('>');
     
  }
console.log(bigToSmall([[1,2],[3,4],[5,6]]));