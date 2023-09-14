function setAlarm(employed, vacation){

    if(employed === true && vacation === false){
        return true;
    }else if(employed === true && vacation === true){
        return false;
    }
    return false;
}
//bopbo
console.log(setAlarm(false,true));

/* function setAlarm(employed, vacation){
    return employed && !vacation;
  } */