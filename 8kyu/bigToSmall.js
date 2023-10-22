

function bigToSmall(){
    //coding here...
    let arr = [1,2,3,4,5,6]
    return arr.sort((a,b) => b - a).join('>')
     
  }
console.log(bigToSmall());