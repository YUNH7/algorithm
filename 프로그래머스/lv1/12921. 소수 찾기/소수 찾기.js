function solution(n) { 
    if (n < 2) return 0
    
    let result = 1
    for (let i = 3; i <= n; i+=2) {
        let cnt = 0
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) cnt++        
            if (cnt === 2) break
        }
        if (cnt === 1) result++
    }
    return result
}