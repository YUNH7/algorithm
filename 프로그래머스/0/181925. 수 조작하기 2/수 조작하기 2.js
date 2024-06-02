function solution(numLog) {
    const dir = { 1: 'w', '-1': 's', 10: 'd', '-10': 'a' };
    return numLog.slice(1).reduce((a, c, i) => a += dir[c - numLog[i]], '');
}