function pipeFix(numbers){

    let min = numbers[0];
    let max = numbers[numbers.length - 1];
    let result = [];
    for (let i = min; i <= max; i++) {
        result.push(i)
    }
    return result;
}

console.log(pipeFix([1,2,3,5,6,8,9]));


