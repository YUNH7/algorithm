function solution(array) {
    array.sort((a,b) => a - b)
    const middleIdx = Math.floor(array.length / 2)
    return array[middleIdx]
}