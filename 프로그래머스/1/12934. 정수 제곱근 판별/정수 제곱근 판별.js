function solution(n) {
    const x = Math.sqrt(n)
    return Number.isInteger(x) ? (x+1) ** 2 : -1;
}