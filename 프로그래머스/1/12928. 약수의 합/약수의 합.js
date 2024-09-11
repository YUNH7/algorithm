function solution(n) {
    return new Array(n).fill(0).reduce((a, _, i) => n % (i + 1) === 0 ? a + i + 1 : a, 0);
}