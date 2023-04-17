function solution(name, yearning, photo) {
    const miss = {}
    for (let i = 0; i < name.length; i++) {
        miss[name[i]] = yearning[i]
    }

    return photo.map(p => p.reduce((a, c) => a + (miss[c] || 0), 0))
}