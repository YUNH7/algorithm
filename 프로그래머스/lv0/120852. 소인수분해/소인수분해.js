function solution(n) {
    let i = 2
    let result = []
    while(n !== 1) {
        if (n % i === 0) result.push(i)
        while(n % i === 0) {
            n /= i
        }
        i++
    }
    return result
}