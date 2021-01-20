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

// function name(params) {

// }
// Write a JavaScript function that checks whether a passed string is palindrome or not? 

//Write a JavaScript function that generates all combinations of a string.
//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function LeapYear(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        console.log("This year is leapYear ")
    } else {
        console.log("This year is not  leapYear ")
    }
}

LeapYear(2012);