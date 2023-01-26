function solution(s, n) {
    let lower = 'abcdefghijklmnopqrstuvwxyz'
    let upper = lower.toUpperCase()
    let len = lower.length
    
    let result = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            result += ' '
            continue
        }
        
        let secret = s[i].toUpperCase() === s[i] ? upper : lower
        let idx = secret.indexOf(s[i])
        if (idx + n >= len) {
            result += secret[idx + n - len]
        } else {
            result += secret[idx + n]
        }
    }
    return result
}