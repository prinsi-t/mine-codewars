function converter (mpg) {
    //code to convert miles per imperial gallon to kilometers per liter
    let gallon = 4.54609188;
    let mile = 1.609344;
    return Number((mpg * mile/gallon).toFixed(2));
  };
  console.log(converter(10));