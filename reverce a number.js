function reverseFunction(n) {

    n = n + ""
    return n.split("").reverse().join("");

}

console.log(reverseFunction(123456))