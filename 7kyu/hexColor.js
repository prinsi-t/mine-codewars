function hexColor(index){
    // Beautiful colors below!
    let colors = (index || '0 0 0').split(' ').map((Number));
    let max = Math.max(colors[0], colors[1], colors[2]);
    let hash = colors.map(c => c > 0 && c == max ? '1' : '0').join('');

    return{
        '000': 'black',
    '111': 'white',
    '100': 'red',
    '110': 'yellow',
    '010': 'green',
    '011': 'cyan',
    '001': 'blue',
    '101': 'magenta'
  }[hash];
    }
    // console.log(hexColor('0 0 0')); // black