function solution(n) {
    for (let pizza = 1; pizza <= n; pizza++) 
        if (pizza * 6 % n === 0) return pizza;    
}