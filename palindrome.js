let a="yeY"
let b=(a.split("").reverse().join(""));

if(a.toLowerCase() === b.toLowerCase()){
    console.log("it is palindrome");
}
else{
    console.log("it is nor palindrome");
}