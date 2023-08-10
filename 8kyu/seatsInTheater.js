function seatsInTheater(nCols, nRows, col, row) {
    //coding and coding..
   let totalSeats = nCols * nRows;
   
   let colNumber = nCols - col + 1;
   let rowNumber = nRows - row;

   let people = colNumber * rowNumber;
   return people;
    
  }


  console.log(seatsInTheater(16,11,5,3));