function solution(arr) {
    let min = Math.min(...arr)
    let answer = arr.filter(el => el !== min)
    return answer.length === 0 ? [-1] : answer
}