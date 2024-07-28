function solution(numlist, n) {
    return numlist.sort((a, b) => {
        const difA = Math.abs(a - n);
        const difB = Math.abs(b - n);
        if (difA === difB) return b - a;
        return difA > difB ? 1 : -1;
    });
}