function primeNumber(n) {

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return n + " Is   not a Prime Number ";
        }

    }
    return n + "  is a Prime Number "


}

const result = primeNumber(11);
console.log(result);