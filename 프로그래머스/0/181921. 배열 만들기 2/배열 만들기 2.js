function solution(l, r) {
    const result = new Array(r - l + 1).fill(l).map((n, i) => n + i).filter(n => /^[50]*$/.test(`${n}`));
    return result.length === 0 ? [-1] : result;
}