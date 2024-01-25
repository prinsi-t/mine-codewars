
function multiply(number){
    //your code here
    
        if(number.toString().charAt(0)==='-'){
            return (Math.pow(5,(number.toString().length)-1)*number);
        }else{
            return (Math.pow(5,(number.toString().length))*number);
        }
        
  }