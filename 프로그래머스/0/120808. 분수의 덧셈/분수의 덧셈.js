function solution(numer1, denom1, numer2, denom2) {
    const result = [numer1*denom2 + numer2*denom1, denom1*denom2];
    const getGcd = (min, max) => min === 0 ? max : getGcd(max % min, min);
    const gcd = getGcd(...result);
    return result.map(num => num/gcd);
    
}