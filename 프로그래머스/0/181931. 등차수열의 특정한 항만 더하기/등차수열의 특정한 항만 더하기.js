function solution(a, d, included) {
    return included.reduce((acc, b, i) => b ? acc + (a + (d * i)) : acc, 0)
}