function solution(a, b, n) {
    return (function aux(startCoke, result) {
        if (startCoke < a) return result;
        const newCoke = Math.floor(startCoke / a) * b;
        return aux(startCoke % a + newCoke, result + newCoke)
    })(n, 0)
}