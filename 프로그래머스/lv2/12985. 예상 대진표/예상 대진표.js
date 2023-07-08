function solution(n,a,b) { 
    const maxRound = square(n)
    for (let i = 0; i < maxRound; i++) {
        if (a === b) return i
        a = Math.ceil(a/2)
        b = Math.ceil(b/2)
    }
    return maxRound
}

function square(n) {
    let result = 0
    while(n > 1) {
        result++
        n /= 2
    }
    return result
}