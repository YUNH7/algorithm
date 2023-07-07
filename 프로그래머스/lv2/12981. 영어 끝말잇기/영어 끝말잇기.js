function solution(n, words) {
    const firstWord = words[0]
    let lastLetter = firstWord[firstWord.length-1]
    
    const obj = {[firstWord]: true}
    for (let i = 1; i < words.length; i++) {
        const word = words[i]
        if (lastLetter !== word[0] || obj[word]) {
            return [(i+1) % n ? (i+1) % n : n, Math.ceil((i+1) / n)]
        } else {
            obj[word] = true
            lastLetter = word[word.length-1]
        }
    }
    
    return [0, 0]
}