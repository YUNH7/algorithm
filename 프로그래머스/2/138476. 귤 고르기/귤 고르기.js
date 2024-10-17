function solution(k, tangerine) {
    const numObj = tangerine.reduce((a, c) => {
        a[c] = (a[c] || 0) + 1;
        return a;
    }, {});
    const nthObj = Object.keys(numObj).reduce((a, c) => {
        a[numObj[c]] = (a[numObj[c]] || 0) + 1;
        return a;
    }, {});
    const nths = Object.keys(nthObj).sort((a, b) => b - a);
    
    let result = 0;
    for (let nth of nths) {
        const num = nthObj[nth];
        const val = Math.ceil(k / nth);
        if (val <= num) return result + val;
        else {
            k -= nth * num;
            result += num;
        }
    }
    return result;
}