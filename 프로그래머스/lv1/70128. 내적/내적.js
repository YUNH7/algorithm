function solution(a, b) {
    return a.reduce((acc, cur, i) => {
        return acc + cur*b[i]
    }, 0)
}