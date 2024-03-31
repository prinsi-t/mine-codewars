
  function tacofy(word) {
    word = word.toLowerCase()

    let arr = ['shell']

    for (var i = 0; i < word.length; i++)
    {
      if (word[i] == 'a' || word[i] == 'e' || word[i] == 'o' || word[i] == 'i' || word[i] == 'u')
        arr.push('beef');
      if (word[i] == 't')
        arr.push('tomato');
      if (word[i] == 'l')
        arr.push('lettuce');
      if (word[i] == 'c')
        arr.push('cheese');
      if (word[i] == 'g')
        arr.push('guacamole');
      if (word[i] == 's')
        arr.push('salsa');
    }
    arr.push('shell');
    return arr;
  }