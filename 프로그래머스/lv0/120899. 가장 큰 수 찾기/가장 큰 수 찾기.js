function solution(array) {
    let max = Math.max(...array)
    return [max, array.indexOf(max)]
}