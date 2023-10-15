function hotpo(n){
     //Optional Handler to n = 0
    let c = 0;

    while (n > 1){
        n = n % 2 ? 3 * n + 1 : n / 2;
        c++;
    }
    return c;
}
console.log(hotpo(5));