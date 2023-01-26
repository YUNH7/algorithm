function solution(n, m) {
    let min = Math.min(n, m)
    let max = Math.max(n, m)
    let val = 1
    for (let i = 1; i <= min; i++) {
        if (min % i === 0 && max % i === 0) {
            val = i
        }
    }
    return [val, n*m/val]
}