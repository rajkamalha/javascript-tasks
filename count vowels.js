let str="cOmputer"
let count=0;

let vowels=['a','i','o','u','e']
for(let s of str.toLowerCase()){
   if(vowels.includes(s)){
    count++
}


}
console.log(count);

