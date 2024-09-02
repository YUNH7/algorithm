function solution(n, m) {
    const getGcd = (a, b) => a === 0 ? b : getGcd(b % a, a);
    
    const gcd = getGcd(n, m)
    return [gcd, n * m / gcd];
}