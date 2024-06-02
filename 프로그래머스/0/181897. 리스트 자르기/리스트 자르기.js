function solution(n, [a, b, c], num_list) {
    // 정수, 정수a,b,c, 정수 여러개
    const startIdx = n === 1 ? 0 : a;
    const lastIdx = n === 2 ? undefined : b+1;
    const result = num_list.slice(startIdx, lastIdx);
    return n === 4 ? result.filter((_, i) => i % c === 0) : result;
}