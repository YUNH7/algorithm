function solution(s, n) {
    const a = 'abcdefghijklmnopqrstuvwxyz'.repeat(2);
    
    return [...s].map(c => {
        const lower = c.toLowerCase();
        const secret = a[a.indexOf(lower) + n];
        return c === ' ' ? c : lower === c ? secret : secret.toUpperCase();
    }).join('');
}