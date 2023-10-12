function flickSwitch(arr){
  let returning = true;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == 'flick'){
        returning == false ? returning = true : returning = false;
    }
    arr[i] = returning;
  }
  return arr;
}
console.log(['codewars', 'flick', 'code', 'wars']);