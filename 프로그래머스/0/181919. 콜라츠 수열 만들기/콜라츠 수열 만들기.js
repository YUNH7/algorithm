function solution(n) {
    const result = [n];
    while (result.at(-1) !== 1) {
        const cur = result.at(-1);
        const next = cur % 2 ? 3 * cur + 1 : cur / 2;
        result.push(next);
    }
    return result;
}