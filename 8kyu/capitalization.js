function capitalizeWord(word) {
   const firstLetterCap = word[0].toUpperCase()

   const remainingLetters = word.slice(1);
   const classOne = firstLetterCap + remainingLetters;
    return classOne;
  }

  console.log(capitalizeWord('grabber'))

// more ways to solve

  /* function capitalizeWord(word) {
    const first = word[0].toUpperCase()
    return first + word.slice(1)
    
  }

  console.log(capitalizeWord('grabber')) */

 /*  function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);

  }
  console.log(capitalizeWord('grabber'))
  */