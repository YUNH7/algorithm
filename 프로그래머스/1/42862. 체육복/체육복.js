function solution(n, lost, reserve) {
    const reserveSet = new Set(reserve.sort((a, b) => a - b));
    const lostSet = new Set(lost.sort((a, b) => a - b));
    lostSet.forEach(v => {
        if (reserveSet.has(v)) {
            reserveSet.delete(v);
            lostSet.delete(v);
        }
    });
    lostSet.forEach(v => {
        if (reserveSet.has(v-1)) reserveSet.delete(v-1);
        else if (reserveSet.has(v+1)) reserveSet.delete(v+1);
        else n -= 1;
    });
    return n;
}