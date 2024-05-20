function solution(arr) {
    const startIdx = arr.indexOf(2);
    const lastIdx = arr.lastIndexOf(2);
    return startIdx !== -1 ? arr.slice(startIdx, lastIdx + 1) : [-1]
}