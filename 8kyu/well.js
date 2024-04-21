function well(x){
    return x.filter(w => w === 'good').length > 2 ? 'I smell a series!' : x.filter(w => w === 'good').length > 0 ? 'Publish!' : 'Fail!';
    
}
console.log(well(['bad', 'good', 'good', 'good', 'bad']));