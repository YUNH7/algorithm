function solution(spell, dic) {
    for (let word of dic) {
        if (spell.every(el => word.includes(el))) {
            return 1
        }
    }
    return 2
}