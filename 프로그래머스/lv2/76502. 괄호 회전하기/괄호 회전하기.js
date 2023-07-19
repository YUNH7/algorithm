function solution(s) {
    if (s.length % 2) return 0
    
    const bracket = {'(':')', '[':']', '{':'}'}
    const aux = (s) => {
        let cnt = 0
        const stack = []
        for (let i = 0; i < s.length; i++) {
            if (bracket[s[i]]) stack.push(s[i])
            else {
                const last = stack.pop()
                if (bracket[last] !== s[i]) return 0
                else if (!stack.length) cnt++
            }
        }
        return stack.length ? 0 : cnt
    }
    
    let max = 0
    const lastIdx = s.length - 1 
    for (let i = 0; i <= lastIdx; i++) {
        s = s.slice(1) + s.slice(0, 1)
        if (bracket[s[0]] && !bracket[s[lastIdx]]) {
            const cnt = aux(s)
            if (max < cnt) max = cnt
        }
    }
    return max
}