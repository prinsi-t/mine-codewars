function sortMyString(S) {
    // your code here
    let even = S.split('').filter((x,i) => i % 2).join('');
    let odd = S.split('').filter((x,i) => !(i % 2)).join('');
    return `${odd} ${even}`;
}
