function solution(n) {
    let cnt = 0;
    for (let i = 4; i <= n; i++) if (aux(i)) cnt += 1;
    return cnt;
}

const aux = (num) => {
    let cnt = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            cnt += 1;
            if (cnt === 3) return true;
        }
    }
    return false;
}