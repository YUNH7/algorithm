function solution(clothes) {
    return Object.values(
        clothes.reduce((a, [_, key]) => {
            a[key] = (a[key] || 0) + 1;
            return a;
        }, {})
    ).reduce((a, c) => a * (c + 1), 1) - 1;
}