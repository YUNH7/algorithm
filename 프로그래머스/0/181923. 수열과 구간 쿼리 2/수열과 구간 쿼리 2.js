function solution(arr, queries) {
    return queries.map(([s, e, k]) => arr.filter((el, i) => i >= s && i <= e && el > k).sort((a, b) => a - b)[0] || -1)
}