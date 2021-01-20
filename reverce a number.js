function reverseFunction(n) {

    n = n + ""
    return n.split("").reverse().join("");

}

console.log(reverseFunction(123456))


// another way

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