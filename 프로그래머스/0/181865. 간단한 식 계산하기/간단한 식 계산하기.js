const sign = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
}

function solution(binomial) {
    const [a, op, b] = binomial.split(' ');
    return sign[op](+a, +b);
}