function solution(n) {
    const memo = [0, 1, 2]
    for (let i = 3; i <= n; i++) memo[i] = (memo[i-1] + memo[i-2]) % 1000000007
    return memo[n] 
}