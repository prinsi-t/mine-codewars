function contamination(text, char){
    // Code here ;)
    if(text === '' || char === ''){
        return '';
    }
    return char.repeat(text.length);
  }

  console.log(contamination('abe','c'));