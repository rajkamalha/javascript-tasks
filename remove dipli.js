
let arr=[1,2,3,4,5,5,4,3]
let rr=arr.filter(( x, y) => {
    return arr.indexOf(x)== y
    
});
console.log(rr)