function solution(a, b, c) {
    const same = [a === b, a === c, b === c].filter(el => el).length;
    const result = a + b + c;
    const result2 = result * (a**2 + b**2 + c**2);
    const result3 = result2 * (a**3 + b**3 + c**3);
    return same === 0 ? result : same === 1 ? result2 : result3;
}