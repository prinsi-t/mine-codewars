var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    
        if (humanYears <= 2){
           return [humanYears, 6 + 9 * humanYears, 6 + 9 * humanYears]
        }else{
            return [humanYears, 16 + 4 * humanYears, 14 + 5 * humanYears]
        }
    }
  
  
  console.log(humanYearsCatYearsDogYears(4));
  