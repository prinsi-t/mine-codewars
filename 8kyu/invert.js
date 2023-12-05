function invert(array) {
    return array.map(n => n * -1)
    //return array.map(n => n === -0 ? 0 : n);
 }
 console.log(invert([2,3,4]));