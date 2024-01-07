function fuelPrice(litres, pricePerLitre) {
    // your code here
    // Good luck with it!
    //
    for (let i = 2; i <= 10; i += 2){
        if (i <= litres ) pricePerLitre -= 0.05;
    }
    return Number((litres * pricePerLitre).toFixed(2))
  }