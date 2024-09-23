function palin(str){
    str = str.toLowerCase();
    for(let i=0;i<str.length/2;i++){
        if(str[i]!==str[str.length-1-i]){
           return 'not palindrome'
           
            
        }
      
    }
    return 'is palindrome'
    

   }
    

let test='madaMm'
console.log(palin(test));
