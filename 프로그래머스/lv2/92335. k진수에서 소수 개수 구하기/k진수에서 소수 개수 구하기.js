function solution(n, k) {
    const primeArr = n.toString(k).split('0')
    let result = 0
    for (let prime of primeArr) isPrime(+prime) && result++
    return result
}

function isPrime (n) {
    if (n === 2) return true
    if (n === 1 || n % 2 === 0) return
    for (let i = 3; i <= Math.sqrt(n); i++) if (n % i === 0) return
    return true
}