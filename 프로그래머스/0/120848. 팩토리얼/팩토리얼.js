function solution(n) {
    const memo = [0, 1];
    for (let i = 2; i <= n; i++) {
        memo[i] = memo[i-1] * i;
        if (memo[i] > n) return i-1;
    }
    return memo.length - 1;
}