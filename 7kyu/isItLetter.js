function isItLetter(character) {
    if( character.toLowerCase() === character.toUpperCase()) return false;
  return true
  }

  console.log(isItLetter('a'));