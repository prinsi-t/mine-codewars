function repeatSequenceLen(a0) {
    //coding and coding..
    let set = new Set();
  
    while(true) {
      let size = set.size;
      
      a0 = a0.toString().split("").reduce((a, b) => a + b * b, 0);
      set.add(a0);
      
      if (size === set.size) break;
    }
    
    return set.size - Array.from(set).indexOf(a0);
    
  }