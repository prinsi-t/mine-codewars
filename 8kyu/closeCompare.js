function closeCompare(a, b, m=0){
    // ...
    if(a === b) return 0;
  if(a > b)
    {
        if (a + m <= b || a - m <= b) return 0;
        return 1;
    }else
    {
        if(a + m >= b) return 0;
        return -1;
    }
  }
  