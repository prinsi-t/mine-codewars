function amIWilson(p) {
    // check if prime is Wilson
    return (factorial(p-1) + 1) / Math.pow(p, 2) % 1 === 0;
   
  }
  function factorial(n)
    {
        if  (n == 0) return 1
         else return n * factorial(n-1);
    }
    console.log(amIWilson(5));