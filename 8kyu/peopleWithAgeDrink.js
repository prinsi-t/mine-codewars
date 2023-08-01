function peopleWithAgeDrink(old) {
  

 
    if(old <= 13){
        return 'drink toddy';
    }else if(old <= 17){
        return 'drink coke';
    }else if (old <= 20 ){
        return 'drink beer';
    }else if(old >= 21){
        return 'drink whiskey';
    }
   
  };

  console.log(peopleWithAgeDrink(16));

 /*  Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more. */