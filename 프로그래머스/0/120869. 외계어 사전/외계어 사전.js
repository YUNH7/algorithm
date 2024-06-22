function solution(spell, dic) {
    return dic.some(word => spell.every(c => word.length === spell.length && [...word].includes(c))) ? 1 : 2;
}