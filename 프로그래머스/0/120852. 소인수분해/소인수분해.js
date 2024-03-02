function solution(n) {
    const result = []
    let base = n
    
    for (let i = 2; i <= n; i++) {
        if (base % i === 0) {
            result.push(i)
            while (base % i === 0) base = base / i
            if (base === 1) return result
        }
    }
}
