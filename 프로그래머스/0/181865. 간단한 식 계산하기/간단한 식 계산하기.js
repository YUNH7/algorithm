const calcFn = {
    '+' : (a, b) => a + b,
    '-' : (a, b) => a - b,
    '*' : (a, b) => a * b,
}

function solution(binomial) {
    const [a, op, b] = binomial.split(' ');
    return calcFn[op](+a, +b);
}