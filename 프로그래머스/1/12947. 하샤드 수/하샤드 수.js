function solution(x) {
    return x % [...String(x)].reduce((a, c) => a + +c, 0) === 0;
}