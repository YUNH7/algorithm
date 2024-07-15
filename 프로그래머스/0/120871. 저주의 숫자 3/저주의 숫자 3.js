function solution(n) {
    let k = 0;
    while (n !== 0) {
        k += 1;
        if (!(`${k}`.includes('3') || k % 3 === 0)) n -= 1;
    }
    return k;
}