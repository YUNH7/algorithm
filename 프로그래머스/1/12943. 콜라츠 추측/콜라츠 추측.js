function solution(num) {
    const aux = (n, num) => {
        if (n === 500) return -1;
        else if (num === 1) return n;
        
        return aux(n+1, num % 2 ? num * 3 + 1 : num / 2);
    }
    return aux(0, num);
}