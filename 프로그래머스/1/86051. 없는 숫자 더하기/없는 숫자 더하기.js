function solution(numbers) {
    return new Array(10).fill(0).reduce((a, _, i) => numbers.includes(i) ? a : a + i, 0);
}