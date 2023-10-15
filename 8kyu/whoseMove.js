function whoseMove(lastPlayer, win) {
    //coding and coding..
    if(lastPlayer === 'black' && win === false){
        return 'white'
    }else if(lastPlayer === 'white' && win === false){
        return 'black'
    }else if(lastPlayer === 'white' && win === true){
        return 'white'
    }else if(lastPlayer === 'black' && win === true){
        return 'black'
    }
    //return win? lastPlayer: lastPlayer ===' black' ? 'white' : 'black';
  }

  console.log(whoseMove('black',false));