function fibonacci(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    } else {

        let result = fibonacci(n - 1) + fibonacci(n - 2);
        return result;
    }
}

var result = fibonacci(10);
console.log(result);