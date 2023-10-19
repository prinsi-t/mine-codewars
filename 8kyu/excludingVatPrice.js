//return price without vat
function excludingVatPrice(price){
    // your code
    return (price == null) ? -1 : Math.round((price / 1.15) * 100) / 100;
  }
  console.log(excludingVatPrice(230));