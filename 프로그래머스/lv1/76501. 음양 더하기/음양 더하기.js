function solution(absolutes, signs) {
    let result = absolutes.reduce((acc, cur) => acc + cur)
    
    for (let i = 0; i < signs.length; i++) {
        if (!signs[i]) {
            result -= (absolutes[i]*2)
        }
    }
    
    return result
}