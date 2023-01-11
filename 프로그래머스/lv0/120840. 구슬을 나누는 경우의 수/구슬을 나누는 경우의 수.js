function fac(num) {
    let result = BigInt(1)
    for (let i = 1; i<=num; i++) {
        result *= BigInt(i)
    }
    return result
}

function solution(balls, share) {
    return parseInt(fac(balls)/fac(balls-share)/fac(share))
    
}