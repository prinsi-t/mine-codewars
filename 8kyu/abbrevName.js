function abbrevName(name){

    // code away
    const ans = [name[0]]
    for (let i = 0; i < name.length; i++){
        if(name[i] === ' '){
            ans.push(name[i + 1]);
        }
    }
    return ans.map(el => el.toUpperCase()).join('.')
    //return name.split(" ").map(el => el[0].toUpperCase()).join(".")
}
console.log(abbrevName("Sam Harris"));