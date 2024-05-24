function solution(a, b, n) {
    let result = 0;
    while (n >= a) {
        let newCoke = Math.floor(n / a) * b;
        result += newCoke;
        n = n % a + newCoke;
    } 
    return result;
}