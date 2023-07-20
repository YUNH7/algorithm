function solution(n, left, right) {     
    const doubleArr = []
    for (let i = Math.floor(left/n); i <= right/n; i++) {
        doubleArr[i] = []
        for (let j = 0; j < n; j++) {
            doubleArr[i][j] = i < j ? j+1 : i+1
        }
    }
    const flatArr = doubleArr.flat()
    const start = left%n
    const fianl = start + right - left + 1
    return flatArr.slice(start, fianl)
}