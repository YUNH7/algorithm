function solution(n) {
    return new Array(n)
        .fill(0)
        .map((_, i) => new Array(n).fill(0)
             .map((zero, j) => i === j ? 1 : zero))
}