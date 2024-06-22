function solution(myString, pat) {
    return new Array(myString.length - pat.length + 1)
        .fill(0)
        .reduce((a, c, i) => myString.slice(i, i + pat.length) === pat ? a + 1 : a, 0);
}