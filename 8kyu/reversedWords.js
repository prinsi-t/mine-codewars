function poop(string) {
    let s = string.trim().split(' ')
    let reverseArray = []
    let i = s.length
 
    while(i > 0){
       reverseArray.push(s[i-1])
       i--
    }
 
    return reverseArray.filter(x => x).join(" ")
 }
 console.log(poop('hell wor'));