class Guesser {
    constructor(number, lives) {
      this.number = number;
      this.lives = lives;
    }
    
    guess(n) {
      if(this.lives === 0){
        return Except('Error!');
      }else if(n == this.number){
        return true;
      }else(this.lives -= 1)
        return false;
    }
  }