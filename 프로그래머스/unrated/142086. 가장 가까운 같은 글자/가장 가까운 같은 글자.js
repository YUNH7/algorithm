function solution(s) {
    const c = {}
    const result = []
    for (let i = 0; i < s.length; i++) {
        if (c[s[i]] === undefined) {
            result.push(-1)
        } else {
            result.push(i - c[s[i]])
        }
        c[s[i]] = i
    }
    
    return result
}