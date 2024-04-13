function solution(ineq, eq, n, m) {
    let result;
    if (ineq === '>') {
        if (eq === "=") result = n >= m;
        else result = n > m;
    } else {
        if (eq === '=') result = n <= m;
        else result = n < m;
    }
    return Number(result);
}