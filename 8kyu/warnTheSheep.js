function warnTheSheep(queue) {
    let sheepIndex = queue.length - queue.indexOf('wolf') - 1;
    if (sheepIndex === 0){
        return 'Pls go away and stop eating my sheep';
   
    }
    return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`;
}