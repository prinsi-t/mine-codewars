function twoSort(s) {
    return s.sort().shift().split('').join('***')
}
console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));