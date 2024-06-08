function solution(intStrs, k, s, l) {
    return intStrs.map(str => +str.slice(s, s+l)).filter(n => n > k);
}