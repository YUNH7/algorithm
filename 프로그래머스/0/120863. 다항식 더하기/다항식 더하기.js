function solution(polynomial) {
    const result = polynomial.split(' + ').reduce((a, c) => {
        if (c) {
            if (c.includes('x')) a.x += parseInt(c) || 1;
            else a.k += +c;
        }
        return a;
    }, {x: 0, k: 0});
    const x = result.x ? result.x === 1 ? 'x' : `${result.x}x` : '';
    const k = result.k ? `${result.k}` : '';
    return x && k ? `${x} + ${k}` : x || k;
}