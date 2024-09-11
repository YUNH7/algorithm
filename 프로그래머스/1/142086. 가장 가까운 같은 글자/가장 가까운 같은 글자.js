function solution(s) {
    const obj = {};
    return [...s].map((c, i) => {
        const pre = obj[c];
        obj[c] = i;
            
        return pre !== undefined ? i - pre : -1;
    });
}