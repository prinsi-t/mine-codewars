function addLength(str) {
    //start-here
    const words = str.split(' ');
    return words.map(str => `${str} ${str.length}`);
    
    }

   console.log(addLength('you will'));
    