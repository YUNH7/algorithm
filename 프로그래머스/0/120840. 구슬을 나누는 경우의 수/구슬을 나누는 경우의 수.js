function solution(balls, share) {
    const memo = [1];
    const factorial = (n) => {
        if (!memo[n]) memo[n] = n * factorial(n-1);
        return memo[n];
    }
    
    return Math.round(factorial(balls) / (factorial(balls-share) * factorial(share)));
}
