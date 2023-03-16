function solution(t, p) {
    const len = p.length
    const pnum = Number(p)
    let result = 0
    for (let i = 0; i <= t.length - len; i++) {
        const tnum = Number(t.slice(i, i + len))
        if (pnum >= tnum) result += 1
    }
    return result
}