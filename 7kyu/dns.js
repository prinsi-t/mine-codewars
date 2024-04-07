function DNAStrand(dna){
    //your code here
  let newStr = ""
  for(let i=0;i<dna.length;i++){

    if(dna[i] === "A"){
        newStr += "T"
    }
    else if(dna[i] === "T"){
        newStr += "A"
    }
    else if(dna[i] === "G"){
        newStr += "C"
    }else if(dna[i] === "C"){
        newStr += 'G'
    }




  }
    

return newStr

}



console.log(DNAStrand("ATTGC"))