function isPrime(n) {
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            return "Not a prime number";
        }
    }
    return "Your Number is a Prime Number";
}

var result = isPrime(40);


console.log(result);