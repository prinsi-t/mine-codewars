function pillars(numPill, dist, width) {
    // your code here
    if(numPill === 1){
        return 0;
    }else{
        return (numPill - 1) * (dist * 100 + width) - width;
    }
     
  }
  console.log(pillars(2, 20, 25));