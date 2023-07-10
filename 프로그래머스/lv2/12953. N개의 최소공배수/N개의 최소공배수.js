function solution(arr) {
    const result = [1]
    let isChange = true
    while (isChange) {
        arr.sort((a, b) => a-b)
        isChange = false
        for (let i = 2; i <= arr[arr.length - 1]; i++) {
            if (arr.some(el => el % i === 0)) {
                result.push(i)
                arr = arr.map(el => el % i === 0 ? el/i : el)
                isChange = true
                break
            }
        }
    }
    return result.reduce((a,c) => a*c)
}