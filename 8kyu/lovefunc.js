function lovefunc(flower1, flower2){
    //code here....
    if(flower1 % 2 === 0 && flower2 % 2 != 0){
        return true;
    }else if(flower2 % 2 === 0 && flower1 % 2 != 0){
        return true
    }else
        return false;
        
}
console.log(lovefunc(1,4));