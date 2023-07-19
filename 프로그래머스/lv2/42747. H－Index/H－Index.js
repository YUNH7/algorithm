function solution(citations) {
    return citations.sort((a, b) => b - a)
        .reduce((a, c, idx) => c >= idx+1 ? idx+1 : a, 0)
}