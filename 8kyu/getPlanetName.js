function getPlanetName(id){
    let name;
    switch(id){
      case 1:
       return name = 'Mercury'
      case 2:
        return name = 'Venus'
      case 3:
        return name = 'Earth'
      case 4:
        return name = 'Mars'
      case 5:
        return name = 'Jupiter'
      case 6:
        return name = 'Saturn'
      case 7:
        return name = 'Uranus'
      case 8:
        return name = 'Neptune'
    }
    
    return name;
  }
  console.log(getPlanetName(3));