function solution(s, skip, idx) { 
    // s에 해당하는 알파벳은 idx만큼 뒤의 알파벳으로 바꾸기
    // skip은 idx만큼 넘길 때 세지 않기
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const findAlphabet = (c) => {
        if (!skip.includes(c)) return c
        return findAlphabet(alphabet[alphabet.indexOf(c) - 1])
    }
    
    let excludeSkip = [...alphabet].filter(al => !skip.includes(al))
    const len = excludeSkip.length
    
    return [...s]
        .map(c => excludeSkip[(excludeSkip.indexOf(findAlphabet(c)) + idx) % len])
        .join('')
}