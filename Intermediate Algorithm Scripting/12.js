function sumPrimes(num) {
    let sum = 0;
    while (num > 1) {
        outer: for (let i = 2; i <= num; i += 1) {
            if (num % i === 0 && num !== i) {
                num -= 1;
                break outer;
            }
            if (i === num) {
                sum += num;
                num -= 1;
            }
        }
    }
    return sum;
}

sumPrimes(10);
