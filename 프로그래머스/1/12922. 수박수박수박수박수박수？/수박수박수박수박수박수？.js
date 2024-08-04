function solution(n) {
    const val = Math.floor(n / 2);
    const result = '수박'.repeat(val);
    return n % 2 ? result + '수' : result;
}