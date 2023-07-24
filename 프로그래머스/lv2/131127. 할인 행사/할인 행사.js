function solution(want, number, discount) {
    const wantNum = want.reduce((a, c, i) => (a[c] = number[i], a), {})
    let result = 0
    for (let i = 0; i < discount.length; i++) {
        const copyWant = {...wantNum}
        for (let j = i; j < discount.length; j++) {
            if (!copyWant[discount[j]]) break
            copyWant[discount[j]]--
        }
        if (Object.values(copyWant).every(val => val === 0)) result++
    }
    return result
}