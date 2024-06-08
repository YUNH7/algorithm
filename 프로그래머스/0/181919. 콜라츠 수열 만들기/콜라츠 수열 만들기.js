function solution(n) {     
    return (function aux (num, arr) {
        if (num === 1) return arr;
        
        const calcNum = num % 2 ? 3 * num + 1 : num / 2;
        return aux(calcNum, [...arr, calcNum]);
    }(n, [n]));
}