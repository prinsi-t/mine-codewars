function spacey(array){
    let combined = []
    let temp = array[0];
    for (let i = 1; i < array.length + 1; i++){
        combined.push(temp);
        temp += array[i]
    }
    return combined;
}

