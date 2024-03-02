function solution(n) {
    let result = 0
    const harf = Math.sqrt(n) 
    for (let i = 1; i < harf; i++) {
        if (n % i === 0) result++
    }
    const isSquare = harf === Math.floor(harf) ? 1 : 0
    return result * 2 + isSquare
}