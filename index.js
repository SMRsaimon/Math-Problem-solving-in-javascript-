// check Prime Number or not Program in JavaScript 

// Start Program system 1  
// function facturial(n) {
//     let fact = 1;
//     for (let i = 1; i <= n; i++) {
//         fact = fact * i;
//     }
//     return fact;
// }

// const result = facturial(4);
// console.log(result);
function reverseFunction(n) {

    n = n + ""
    return n.split("").reverse().join("");

}

console.log(reverseFunction(123456))