function solution(spell, dic) {
    for (let word of dic) {
        if (spell.every(el => word.split('').filter(c => c === el).length === 1)) {
            return 1
        }
    }
    return 2
}