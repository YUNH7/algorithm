function solution(t, p) {
    const len = p.length;
    return new Array(t.length - len + 1)
        .fill(0)
        .reduce((a, c, i) => Number(t.slice(i, i+len)) <= +p ? a + 1 : a, 0);
}