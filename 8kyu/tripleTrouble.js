function tripleTrouble(one, two, three){
    //Solution
    let str = '';
    for(let i = 0; i < one.length; i++){
       str += one[i] + two[i] + three[i];
    }
    return str;
   }
   console.log(tripleTrouble('abc','abc','abe'));