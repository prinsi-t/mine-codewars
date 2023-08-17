function checkAlive (health) {
    if(health > 0 && health < 10){
        return true
    }else(health < 0 && health > -10)
        return false
    
  }

  console.log(checkAlive(3));