function isOpposite(s1,s2){
    //coding here...
    if (s1.length === 0 || s2.length === 0){
        return false;
    }

    let opp = '';
    if (s2 === s2.toLowerCase()){
        opp += s2.toUpperCase();
    }else if(s2 === s2.toUpperCase()){
        opp += s2.toLowerCase();
    }

    if(s1 === opp){
        return true
    }
    return false;
  }

  console.log(isOpposite('ab','AB'));