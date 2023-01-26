function solution(s) {
    if (s.length === 4 || s.length === 6) {
        if (!Number.isNaN(Number(s)) && !s.includes('e')) {
            return true
        }
    }
    return false

}