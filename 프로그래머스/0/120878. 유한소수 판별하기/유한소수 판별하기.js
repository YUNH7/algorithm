const factorization = (k) => {
    const result = [];
    while (k !== 1) {
        for (i = 2; i <= k; i++) {
            if (k % i === 0) {
                result.push(i);
                k /= i;
            }
        }
    }
    return result;
}

function solution(a, b) {
    const under = factorization(a).reduce((acc, c) => acc % c === 0 ? acc / c : acc, b);
    return factorization(under).filter(n => n % 2 && n % 5).length ? 2 : 1;
}