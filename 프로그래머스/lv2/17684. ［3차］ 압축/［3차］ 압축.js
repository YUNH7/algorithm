function solution(msg) {
    const dict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').reduce((a,c,i) => {
        a.set(c, i+1)
        return a
    }, new Map())
    
    const setDict = (word, i) => {
        const next = word + msg[i+1]
        if (!dict.has(next)) {
            dict.set(next, dict.size+1)
            result.push(dict.get(word))
            return i;
        }
        return setDict(next, i+1)
    }
    
    const result = []
    for (let i = 0; i < msg.length; i++) {
        i = setDict(msg[i], i)
    }
    return result
}