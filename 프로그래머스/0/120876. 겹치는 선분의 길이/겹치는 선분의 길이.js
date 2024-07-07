function solution(lines) {
    const result = lines.reduce((a, [start, end]) => {
        for (let i = start + 1; i <= end; i++) a[i] = (a[i] || 0) + 1;
        return a;
    }, {});
    return Object.values(result).filter(dot => dot > 1).length;
}
