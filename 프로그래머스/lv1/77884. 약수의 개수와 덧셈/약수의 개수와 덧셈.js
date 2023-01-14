function solution(left, right) {
    let result = 0
    for (let i = left; i <= right; i++) {
        let cnt = 0
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                cnt++
            }
        }
        cnt % 2 ? result -=i : result +=i
    }
    return result
}