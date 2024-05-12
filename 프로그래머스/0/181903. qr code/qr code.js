function solution(q, r, code) {
    return code.split('').filter((_, i) => i % q === r).join('');
}