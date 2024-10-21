function solution(keymap, targets) {
    const numPad = keymap.reduce((a, c) => {
        for (let i = 0; i < c.length; i++) {
            const s = c[i];
            if (a[s] === undefined || a[s] > i+1) a[s] = i+1;
        }
        return a;
    }, {});
    
    return targets.map(str => {
        let result = 0;
        for (let i = 0; i < str.length; i++) {
            const n = numPad[str[i]];
            if (!n) return -1;
            result += n;
        }
        return result;
    })
}