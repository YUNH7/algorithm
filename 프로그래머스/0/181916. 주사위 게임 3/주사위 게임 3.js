function solution(...arr) {
    const dices = arr.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    const entries = Object.entries(dices).sort((a, b) => b[1] - a[1]);
    const [p, q, r] = entries.map(el => +el[0]);
    const len = entries.length;
    
    if (len === 1) return 1111 * p;
    if (len === 2) return entries[0][1] !== entries[1][1] ? (10 * p + q) ** 2 : (p + q) * Math.abs(p - q);
    if (len === 3) return q * r; 
    return +entries.sort((a, b) => a[0] - b[0])[0][0];
}