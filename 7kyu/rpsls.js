function rpsls(pl1,pl2){
    //Your Magnificent Code here
    if(pl1 === pl2){
        return 'Draw!';
    }else if((pl1 === 'scissors' || pl1 === 'lizard') && (pl2 === 'paper')){
        return 'Player 1 Won!';
    } else if ((pl1 === "paper" || pl1 === "spock") && (pl2 ==="rock")) {
        return 'Player 1 Won!';
        }
      else if ((pl1 === "rock" || pl1 === "scissors") && (pl2==="lizard")) {
        return 'Player 1 Won!';
        }
      else if ((pl1 === "lizard" || pl1 === "paper") && (pl2==="spock")) {
        return 'Player 1 Won!';
        }
      else if ((pl1 === "rock" || pl1 === "spock") && (pl2==="scissors")) {
        return 'Player 1 Won!';
        }
      else if ((pl2 === "scissors") && (pl1 === "lizard" || pl1==="paper")) {
        return "Player 2 Won!";
      } 
      else if ((pl2 === "paper") && (pl1 === "rock" || pl1==="spock")) {
        return "Player 2 Won!";
      }
      else if ((pl2 === "rock") && (pl1 === "lizard" || pl1==="scissors")) {
        return "Player 2 Won!";
      }
      else if ((pl2 === "lizard") && (pl1 === "spock" || pl1==="paper")) {
        return "Player 2 Won!";
      }
      else if ((pl2 === "spock") && (pl1 === "rock" || pl1==="scissors")) {
        return"Player 2 Won!";
      }
     
       
   }