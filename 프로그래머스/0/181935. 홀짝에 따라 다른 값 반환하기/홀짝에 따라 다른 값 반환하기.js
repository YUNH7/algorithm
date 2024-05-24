function solution(n) {
    return new Array(Math.floor(n /2) + 1).fill(2).reduce((a,c,i) => a + (n % 2 ? i*c + 1 : (i*c) ** 2), 0);
}