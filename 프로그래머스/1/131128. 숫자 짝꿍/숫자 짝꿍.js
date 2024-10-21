function solution(...XY) {
    const makeNumObj = (numStr) => [...numStr].reduce((a, c) => {
        a[c] = (a[c] || 0) + 1;
        return a;
    }, {});
    const [X, Y] = XY.map(str => makeNumObj(str));
    const filtered = Object.keys(X).filter(n => Y[n]).sort((a, b) => +b - +a);
    return filtered.length === 0 ? '-1' : filtered[0] == 0 ? '0' : filtered.map(n => n.repeat(Math.min(X[n], Y[n]))).join('');
}