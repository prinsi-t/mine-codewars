function position(letter){
    //Write your own Code!
    console.log(letter);
    let result = letter.charCodeAt() - 96;
    return 'Position of alphabet: ' + result;
    }

    console.log(position('a'));

    /* function position(letter){
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
      } */