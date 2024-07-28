function solution(arr, query) {
    return query.reduce((a, c, i) => i % 2 ? a.slice(c) : a.slice(0, c+1), arr);
}