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
// function reverseFunction(n) {

//     n = n + ""
//     return n.split("").reverse().join("");

// }

// console.log(reverseFunction(123456))

function reverseFunction(str) {
    let reverse = "";
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        reverse = element + reverse;

    }
    return reverse;
}

const result = reverseFunction('this is the dog and I want to reverse this dog to cat')

console.log(result)