function solution(a, b){
    // your code here

    if(a.length > b.length){
        return b + a + b;
    }
    return a + b + a;
  }

  console.log(solution('45','1'));
  