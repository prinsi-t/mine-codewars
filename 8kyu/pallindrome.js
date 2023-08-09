    function isPalindrome(x) {
        // your code here
        let pally2 = x.toLowerCase();

        let forward = pally2;

        let pally = pally2.split('').reverse().join('');
        return pally === forward;
        }
        
    
        //return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
    console.log(isPalindrome('hello'));
    