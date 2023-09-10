function solution(numbers, n) {
    let result = 0
    for (let num of numbers) {
        result += num
        if (result > n) return result
    }
}