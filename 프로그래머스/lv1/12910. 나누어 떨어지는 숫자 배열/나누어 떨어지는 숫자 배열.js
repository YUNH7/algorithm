function solution(arr, divisor) {
    let answer = arr.filter(el => Number.isInteger(el/divisor)).sort((a,b) => a-b)
    return answer.length !== 0 ? answer : [-1]
}